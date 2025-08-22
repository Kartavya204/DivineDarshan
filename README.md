# Divine Darshan Crowd Monitoring System

A real-time crowd monitoring backend system built with Node.js, Express, and Socket.IO for managing and analyzing crowd data with AI-powered forecasting and real-time alerts.

## 🚀 Features

- **Real-time Crowd Monitoring**: Track crowd counts across multiple zones
- **AI Forecasting**: Predictive analytics using moving averages and trend analysis
- **WebSocket Alerts**: Instant notifications for congestion events
- **Risk Assessment**: Real-time risk level calculations
- **RESTful API**: Comprehensive API endpoints for data management
- **Mock Data Generator**: Python script for testing and simulation

## 📦 Installation

1. Install Node.js dependencies:
```bash
npm install
```

2. Install Python dependencies (for mock data generator):
```bash
pip install requests
```

## 🏃‍♂️ Usage

### Start the Server
```bash
npm start
# or for development with auto-reload
npm run dev
```

### Generate Mock Data
```bash
npm run mock
# or directly
python mock_data.py
```

## 📡 API Endpoints

### POST `/api/crowd`
Submit crowd data for a specific zone
```json
{
  "zoneId": "GATE1",
  "count": 750
}
```

### GET `/api/risk`
Get risk assessment for all zones
```json
[
  {
    "zoneId": "GATE1",
    "currentCount": 750,
    "riskLevel": 0.75,
    "predictedCount": 780,
    "predictedRisk": 0.78,
    "status": "warning"
  }
]
```

### GET `/api/alerts`
Get active alerts (last 10)
```json
[
  {
    "zoneId": "GATE1",
    "type": "congestion",
    "message": "High crowd at GATE1 (1100 people)",
    "ts": 1697892340,
    "count": 1100
  }
]
```

### GET `/api/crowd`
Get current crowd data for all zones

### GET `/api/forecast/:zoneId`
Get forecast for specific zone

### GET `/health`
Health check endpoint

## 🔌 WebSocket Events

### Client Events
- `connection` - Client connects
- `disconnect` - Client disconnects

### Server Events
- `alert` - Real-time congestion alerts
- `crowdUpdate` - Real-time crowd count updates
- `initialData` - Initial data sent on connection

## 🎯 Configuration

- **Threshold**: 1000 people (configurable in server.js)
- **Port**: 5000 (configurable via PORT environment variable)
- **History Size**: 5 readings per zone for forecasting

## 🧪 Testing

1. Start the server: `npm start`
2. Run mock data: `python mock_data.py`
3. Monitor console for real-time updates and alerts
4. Connect WebSocket clients to receive real-time events

## 📊 Zones

Default monitoring zones:
- GATE1, GATE2 - Entrance gates
- TOILET1 - Restroom facilities
- ENTRANCE, EXIT - Main areas
- FOOD_COURT - Dining area
- PRAYER_HALL - Main prayer area

## 🔮 AI Forecasting

The system uses:
- Moving average for baseline prediction
- Trend analysis for directional forecasting
- Damping factor to smooth predictions

## 🚨 Alert System

Alerts are triggered when:
- Crowd count exceeds threshold (1000 people)
- Real-time WebSocket notifications
- Historical tracking of last 20 alerts

## 📋 Requirements

- Node.js 14+
- Python 3.6+
- Express.js
- Socket.IO
- requests (Python library)
