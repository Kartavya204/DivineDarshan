import requests
import time
import random
import json
from datetime import datetime

# API endpoints
CROWD_URL = "http://localhost:5001/api/crowd"
IOT_URL = "http://localhost:5001/api/iot"
ROUTE_URL = "http://localhost:5001/api/route"

zones = ["GATE1", "GATE2", "GATE3", "GATE4", "TOILET1", "TOILET2", "ENTRANCE", "EXIT", "FOOD_COURT", "PRAYER_HALL", "PARKING"]

def send_crowd_data(zone_id, count):
    """Send crowd data to the server"""
    try:
        payload = {"zoneId": zone_id, "count": count}
        response = requests.post(CROWD_URL, json=payload, timeout=5)
        if response.status_code == 200:
            print(f"✅ Sent: {zone_id} = {count} people")
        else:
            print(f"❌ Failed to send {zone_id}: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"❌ Connection error for {zone_id}: {e}")

def send_iot_data(data_type, value):
    """Send IoT data to the server"""
    try:
        payload = {"type": data_type, "value": value}
        response = requests.post(IOT_URL, json=payload, timeout=5)
        if response.status_code == 200:
            print(f"📊 IoT: {data_type} = {value}")
        else:
            print(f"❌ Failed to send IoT {data_type}: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"❌ IoT connection error: {e}")

def check_route_suggestions():
    """Check and display route suggestions for congested zones"""
    try:
        for zone in ["GATE1", "GATE2", "GATE3", "GATE4"]:
            response = requests.get(f"{ROUTE_URL}/{zone}", timeout=5)
            if response.status_code == 200:
                route_data = response.json()
                if route_data['congested']:
                    print(f"🔄 Route suggestion: {zone} → {route_data['alternativeRoute']} "
                          f"(Reduces crowd from {route_data['currentCrowd']} to {route_data['alternativeCrowd']})")
    except:
        pass

def get_risk_data():
    """Get current risk assessment"""
    try:
        response = requests.get("http://localhost:5001/api/risk", timeout=5)
        if response.status_code == 200:
            risks = response.json()
            print("\n📊 Current Risk Assessment:")
            for risk in risks:
                status = "🟢"
                if risk['riskLevel'] > 0.7:
                    status = "🟡"
                if risk['riskLevel'] > 1.0:
                    status = "🔴"
                print(f"   {status} {risk['zoneId']}: {risk['currentCount']} people (Risk: {risk['riskLevel']:.2f})")
    except:
        pass

def main():
    print("🚀 Starting Enhanced Divine Darshan Mock Data Generator")
    print("📍 Zones:", ", ".join(zones))
    print("📊 IoT Data: Energy, Water, Sanitation, Temperature")
    print("🔄 Route Optimization: Automatic congestion detection")
    print("⏰ Sending data every 2 seconds...")
    print("Press Ctrl+C to stop\n")
    
    # Initial counts for each zone
    counts = {
        "GATE1": 500,
        "GATE2": 300,
        "GATE3": 200,
        "GATE4": 150,
        "TOILET1": 50,
        "TOILET2": 30,
        "ENTRANCE": 200,
        "EXIT": 150,
        "FOOD_COURT": 180,
        "PRAYER_HALL": 400,
        "PARKING": 80
    }
    
    # IoT data ranges
    iot_ranges = {
        "energy": (200, 500),
        "water": (800, 2000),
        "sanitation": (20, 100),
        "temperature": (25, 35)
    }
    
    iteration = 0
    
    try:
        while True:
            iteration += 1
            current_time = datetime.now().strftime("%H:%M:%S")
            print(f"\n--- Iteration {iteration} [{current_time}] ---")
            
            # Update counts with realistic patterns
            # Gate 1 - main entrance, tends to increase
            counts["GATE1"] += random.randint(20, 80)
            counts["GATE1"] = max(100, min(counts["GATE1"], 1500))
            
            # Gate 2 - secondary entrance, more stable
            counts["GATE2"] += random.randint(-30, 40)
            counts["GATE2"] = max(50, min(counts["GATE2"], 800))
            
            # Gate 3 & 4 - side entrances
            counts["GATE3"] += random.randint(-20, 30)
            counts["GATE3"] = max(30, min(counts["GATE3"], 600))
            
            counts["GATE4"] += random.randint(-15, 25)
            counts["GATE4"] = max(20, min(counts["GATE4"], 500))
            
            # Toilets - random fluctuations
            counts["TOILET1"] = random.randint(30, 120)
            counts["TOILET2"] = random.randint(20, 80)
            
            # Entrance - follows gate patterns
            counts["ENTRANCE"] = int((counts["GATE1"] * 0.3 + counts["GATE2"] * 0.2 + 
                                    counts["GATE3"] * 0.1 + counts["GATE4"] * 0.1))
            
            # Exit - people leaving
            counts["EXIT"] = random.randint(100, 300)
            
            # Food court - peaks around meal times
            hour = datetime.now().hour
            if 11 <= hour <= 13 or 18 <= hour <= 20:  # Lunch and dinner times
                counts["FOOD_COURT"] += random.randint(40, 100)
            else:
                counts["FOOD_COURT"] -= random.randint(10, 40)
            counts["FOOD_COURT"] = max(50, min(counts["FOOD_COURT"], 600))
            
            # Prayer hall - periodic peaks during prayer times
            if hour in [6, 12, 18, 21]:  # Prayer times
                counts["PRAYER_HALL"] += random.randint(80, 150)
            else:
                counts["PRAYER_HALL"] -= random.randint(20, 60)
            counts["PRAYER_HALL"] = max(100, min(counts["PRAYER_HALL"], 1200))
            
            # Parking - follows entrance patterns
            counts["PARKING"] = int(counts["ENTRANCE"] * 0.4)
            
            # Send crowd data for all zones
            for zone in zones:
                send_crowd_data(zone, counts[zone])
            
            # Send IoT data
            for iot_type, (min_val, max_val) in iot_ranges.items():
                value = random.randint(min_val, max_val)
                send_iot_data(iot_type, value)
            
            # Check and display route suggestions every 3 iterations
            if iteration % 3 == 0:
                check_route_suggestions()
            
            # Get and display risk data every 5 iterations
            if iteration % 5 == 0:
                get_risk_data()
            
            # Simulate demo scenario: Gate congestion
            if iteration == 10:
                print("\n🎭 DEMO SCENARIO: Simulating Gate 1 congestion...")
                counts["GATE1"] = 1800  # Force congestion
                send_crowd_data("GATE1", 1800)
                print("🚨 Gate 1 congestion created! AI should suggest rerouting to Gate 4")
            
            time.sleep(2)
            
    except KeyboardInterrupt:
        print("\n\n🛑 Mock data generator stopped")
        print("📊 Final counts:")
        for zone, count in counts.items():
            print(f"   {zone}: {count} people")

if __name__ == "__main__":
    main()
