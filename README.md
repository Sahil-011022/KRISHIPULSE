# 🌾 KrushiPlus: ML-Driven Anomaly Detection & Remote Irrigation

**KrushiPlus** is an end-to-end Ag-Tech solution designed to minimize crop loss and equipment failure for Indian farmers. By combining **IoT edge computing** with **Machine Learning**, the system predicts pump failures before they happen and allows farmers to manage their resources remotely.

---

## 🚀 Key Features
* **Predictive Maintenance:** Embedded ML models detect anomalies in pump vibrations and flow rates to prevent burnouts.
* **Remote Irrigation:** Real-time pump control via a mobile-responsive web dashboard.
* **Edge Intelligence:** Local data processing on ESP32 to ensure functionality even with spotty internet.
* **Live Monitoring:** Real-time tracking of soil moisture, temperature, and water flow.

## 🛠️ Tech Stack
| Layer | Technologies |
| :--- | :--- |
| **Hardware** | ESP32, LoRaWAN, Relay Modules, Flow/Moisture Sensors |
| **Embedded AI** | Arduino C++, TensorFlow Lite Micro / TinyML |
| **Backend** | Firebase Realtime Database, Google Cloud Functions |
| **Frontend** | React.js, Vite, Tailwind CSS |
| **Development** | Cursor.ai, Project IDX |

## 📐 System Architecture
The system follows an **IoT Predictive Maintenance Flow**:
1. **Sensor Data Acquisition:** Real-time readings from the field.
2. **Data Filtering:** Noise removal and processing on the ESP32.
3. **ML Inference:** Local anomaly detection (Normal vs. Potential Failure).
4. **Cloud Sync:** Data transmission to Firebase for dashboard visualization.
5. **Actuation:** Remote commands sent from the UI back to the pump relay.

## 📂 Project Structure
```text
├── hardware/           # Arduino/ESP32 source code & wiring diagrams
├── ml-model/           # Jupyter notebooks & exported TFLite models
├── web-app/            # Vite + React frontend dashboard
└── docs/               # Research paper & Poster assets

Link to live intro page --> https://krishipulse.netlify.app/
