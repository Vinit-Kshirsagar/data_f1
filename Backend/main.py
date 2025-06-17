from fastapi import FastAPI
from fastf1_utils import get_lap_telemetry
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/telemetry")
def telemetry(driver: str, year: int, session: str):
    data = get_lap_telemetry(driver, year, session)
    return data
