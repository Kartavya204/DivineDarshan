import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { addCrowdData, forecast } from "./utils/forecast.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enhanced CORS configuration for Cloudflare
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    
    // Allow localhost and Cloudflare domains
    const allowedOrigins = [
      /^https?:\/\/localhost(:\d+)?$/,
      /^https?:\/\/127\.0\.0\.1(:\d+)?$/,
      /\.cloudflare\.com$/,
      /\.cloudflares\.com$/
    ];
    
    if (allowedOrigins.some(regex => regex.test(origin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Trust proxy headers for Cloudflare
app.set('trust proxy', true);

// Enhanced body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let crowdData = {};     // zoneId -> counts
let alerts = [];        // list of active alerts
let iotData = {         // IoT sensor data
    energy: { current: 250, capacity: 500, units: 'kW' },
    water: { current: 1200, capacity: 5000, units: 'L/h' },
    sanitation: { load: 35, capacity: 100, units: '%' },
    temperature: { current: 28, optimal: 25, units: '°C' }
};
const threshold = 1000; // example congestion limit

// Enhanced zone configuration with capacity and routing
const zoneConfig = {
    GATE1: { threshold: 2, type: 'gate', capacity: 1500, routes: ['GATE4', 'EXIT'] },
    GATE2: { threshold: 2, type: 'gate', capacity: 800, routes: ['GATE3', 'EXIT'] },
    GATE3: { threshold: 2, type: 'gate', capacity: 1000, routes: ['GATE2', 'EXIT'] },
    GATE4: { threshold: 2, type: 'gate', capacity: 1200, routes: ['GATE1', 'EXIT'] },
    TOILET1: { threshold: 1000, type: 'facility', capacity: 200, routes: ['TOILET2', 'EXIT'] },
    TOILET2: { threshold: 1000, type: 'facility', capacity: 150, routes: ['TOILET1', 'EXIT'] },
    ENTRANCE: { threshold: 1000, type: 'area', capacity: 2000, routes: ['GATE1', 'GATE2', 'PRAYER_HALL'] },
    EXIT: { threshold: 1000, type: 'area', capacity: 2000, routes: ['GATE3', 'GATE4', 'PARKING'] },
    FOOD_COURT: { threshold: 1000, type: 'area', capacity: 600, routes: ['EXIT', 'PRAYER_HALL'] },
    PRAYER_HALL: { threshold: 1000, type: 'area', capacity: 1200, routes: ['EXIT', 'FOOD_COURT'] },
    PARKING: { threshold: 1000, type: 'area', capacity: 500, routes: ['EXIT'] }
};

// Get configuration for a specific zone
function getZoneConfig(zoneId) {
    return zoneConfig[zoneId] || { 
        threshold: threshold, 
        type: 'area', 
        capacity: 1000,
        routes: ['EXIT']
    };
}

function getZoneThreshold(zoneId) {
    return getZoneConfig(zoneId).threshold;
}

function getZoneType(zoneId) {
    return getZoneConfig(zoneId).type;
}

function getZoneCapacity(zoneId) {
    return getZoneConfig(zoneId).capacity;
}

function getAlternativeRoutes(zoneId) {
    return getZoneConfig(zoneId).routes || ['EXIT'];
}

// Find optimal alternative route based on current crowd
function findOptimalAlternative(congestedZone) {
    const alternatives = getAlternativeRoutes(congestedZone);
    let bestRoute = alternatives[0];
    let lowestCrowd = crowdData[bestRoute] || 0;
    
    for (const route of alternatives) {
        const crowd = crowdData[route] || 0;
        if (crowd < lowestCrowd) {
            bestRoute = route;
            lowestCrowd = crowd;
        }
    }
    
    return bestRoute;
}

// IoT Data endpoints
app.post("/api/iot", (req, res) => {
    const { type, value } = req.body;
    
    if (!type || value === undefined) {
        return res.status(400).json({ error: "type and value are required" });
    }
    
    if (iotData[type]) {
        iotData[type].current = value;
        io.emit("iotUpdate", { type, value, data: iotData[type] });
        console.log(`📊 IoT Update: ${type} = ${value}${iotData[type].units}`);
    }
    
    res.json({ success: true, type, value });
});

app.get("/api/iot", (req, res) => {
    res.json(iotData);
});

// Get optimal route suggestion
app.get("/api/route/:zoneId", (req, res) => {
    const { zoneId } = req.params;
    const currentCrowd = crowdData[zoneId] || 0;
    const capacity = getZoneCapacity(zoneId);
    
    if (currentCrowd > capacity * 0.8) { // 80% capacity threshold
        const alternative = findOptimalAlternative(zoneId);
        res.json({
            congested: true,
            currentZone: zoneId,
            currentCrowd: currentCrowd,
            capacity: capacity,
            alternativeRoute: alternative,
            alternativeCrowd: crowdData[alternative] || 0,
            message: `High congestion at ${zoneId}. Consider using ${alternative} instead.`
        });
    } else {
        res.json({
            congested: false,
            currentZone: zoneId,
            currentCrowd: currentCrowd,
            capacity: capacity,
            message: `Flow at ${zoneId} is normal.`
        });
    }
});

// 1. Crowd data input
app.post("/api/crowd", (req, res) => {
  const { zoneId, count } = req.body;
  
  if (!zoneId || count === undefined) {
    return res.status(400).json({ error: "zoneId and count are required" });
  }

  crowdData[zoneId] = count;
  
  // Add to AI forecasting history
  addCrowdData(zoneId, count);

  // Zone-specific threshold check
  const zoneThreshold = getZoneThreshold(zoneId);
  const zoneType = getZoneType(zoneId);
  
  if (count > zoneThreshold) {
    let alertType = "congestion";
    let alertMessage = `High crowd at ${zoneId} (${count} people)`;
    
    // Special handling for gates
    if (zoneType === 'gate') {
      alertType = "gate_violation";
      alertMessage = `Gate violation at ${zoneId}: ${count} people detected (max: ${zoneThreshold})`;
    }
    
    const alert = { 
      zoneId, 
      type: alertType, 
      message: alertMessage, 
      ts: Date.now(),
      count: count,
      threshold: zoneThreshold
    };
    alerts.push(alert);
    
    // Keep only last 20 alerts
    if (alerts.length > 20) {
      alerts = alerts.slice(-20);
    }
    
    io.emit("alert", alert); // Push to WebSocket clients
    console.log(`🚨 ${zoneType === 'gate' ? '🚪 GATE ALERT' : 'ALERT'}: ${alert.message}`);
  }

  // Emit real-time crowd update to all clients
  io.emit("crowdUpdate", { zoneId, count });
  
  res.json({ success: true, zoneId, count });
});

// 2. Risk zones with forecasting
app.get("/api/risk", (req, res) => {
  const risks = Object.entries(crowdData).map(([zoneId, count]) => {
    const predicted = forecast(zoneId);
    return {
      zoneId,
      currentCount: count,
      riskLevel: count / threshold,
      predictedCount: predicted,
      predictedRisk: predicted ? predicted / threshold : null,
      status: count > threshold ? "critical" : count > threshold * 0.7 ? "warning" : "normal"
    };
  });
  res.json(risks);
});

// 3. Active alerts
app.get("/api/alerts", (req, res) => {
  res.json(alerts.slice(-10)); // last 10 alerts
});

// 4. Get current crowd data
app.get("/api/crowd", (req, res) => {
  res.json(crowdData);
});

// 5. Get forecast for specific zone
app.get("/api/forecast/:zoneId", (req, res) => {
  const { zoneId } = req.params;
  const prediction = forecast(zoneId);
  res.json({ 
    zoneId, 
    prediction,
    currentCount: crowdData[zoneId] || 0
  });
});

// WebSocket connection handling
io.on("connection", (socket) => {
  console.log("📡 Client connected:", socket.id);

  // Send current data to newly connected client
  socket.emit("initialData", {
    crowdData,
    alerts: alerts.slice(-10),
    iotData: iotData,
    risks: Object.entries(crowdData).map(([zoneId, count]) => ({
      zoneId,
      risk: count / threshold,
      capacity: getZoneCapacity(zoneId),
      utilization: Math.min(100, Math.round((count / getZoneCapacity(zoneId)) * 100))
    }))
  });

  socket.on("disconnect", () => {
    console.log("📡 Client disconnected:", socket.id);
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    activeConnections: io.engine.clientsCount,
    zonesMonitored: Object.keys(crowdData).length,
    activeAlerts: alerts.length
  });
});

// Cloudflare-specific health check (returns 200 for proxy health)
app.get("/cdn-cgi/health", (req, res) => {
  res.status(200).send("OK");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints:`);
  console.log(`   POST /api/crowd - Submit crowd data`);
  console.log(`   GET  /api/risk - Get risk assessment`);
  console.log(`   GET  /api/alerts - Get active alerts`);
  console.log(`   GET  /api/crowd - Get current crowd data`);
  console.log(`   GET  /health - Health check`);
});
