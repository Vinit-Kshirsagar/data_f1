# 🚀 Features
📊 Telemetry Visualization: Speed, throttle, brake, gear, and DRS graphs for each lap.

🧠 Driver Comparison: Side-by-side comparison of telemetry between teammates or any two drivers.

🕒 Session Analysis: View data for qualifying, race, and practice sessions.

🗃️ Session Selector: Choose year, Grand Prix, session type (Q/R/P) dynamically.

📌 Graph Controls: Zoom, pan, and filter metrics to focus on specific sections of the track.

# 🛠️ Tech Stack
## Frontend: 

- React

- Tailwind CSS (UI styling)

- Chart.js / Recharts (for visualizations)

## Backend: 

- Python

- FastAPI (or Flask)

- FastF1

- Supabase (if database integration is used for user data or saved sessions)

# 📦 Installation & Setup
Backend (Python + FastF1)

```
git clone https://github.com/Vinit-Kshirsagar/data_f1.git

cd backend

pip install -r requirements.txt

python app.py >
```

Frontend (React)

```
cd frontend
npm install
npm run dev
```
Make sure to set the correct API URL in your .env or configuration file.

# 🖼️ Screenshots
<img width="1638" alt="Screenshot 2025-06-13 at 20 01 40" src="https://github.com/user-attachments/assets/bfa2e506-c2d4-4deb-9eeb-0495e3e54d43" />


# 📈 Example Use Cases
- Fans: Explore your favorite drivers’ data in detail

- Analysts: Visualize in-depth car performance across circuits

- Developers: Use the open-source backend to build custom telemetry tools

