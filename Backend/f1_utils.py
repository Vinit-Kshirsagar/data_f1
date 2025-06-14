import fastf1

def get_lap_telemetry(driver, session_year, session_name):
    session = fastf1.get_session(session_year, session_name, 'R')
    session.load()
    driver_laps = session.laps.pick_driver(driver)
    fastest_lap = driver_laps.pick_fastest()
    telemetry = fastest_lap.get_telemetry()
    return telemetry.to_dict()
