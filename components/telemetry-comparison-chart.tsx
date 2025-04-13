"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Sample data - in a real app, this would come from the FastF1 API
const generateData = (type: string) => {
  const baseData = Array.from({ length: 100 }, (_, i) => ({ distance: i * 10 }))

  if (type === "speed") {
    return baseData.map((point) => ({
      ...point,
      verstappen: Math.sin(point.distance / 100) * 50 + 250 + Math.random() * 10,
      leclerc: Math.sin(point.distance / 100 + 0.2) * 45 + 245 + Math.random() * 10,
      hamilton: Math.sin(point.distance / 100 - 0.1) * 48 + 248 + Math.random() * 10,
    }))
  }

  if (type === "throttle") {
    return baseData.map((point) => ({
      ...point,
      verstappen: Math.max(0, Math.min(100, Math.cos(point.distance / 100) * 50 + 50 + Math.random() * 5)),
      leclerc: Math.max(0, Math.min(100, Math.cos(point.distance / 100 + 0.1) * 50 + 50 + Math.random() * 5)),
      hamilton: Math.max(0, Math.min(100, Math.cos(point.distance / 100 - 0.1) * 50 + 50 + Math.random() * 5)),
    }))
  }

  if (type === "brake") {
    return baseData.map((point) => ({
      ...point,
      verstappen: Math.max(0, Math.min(100, -Math.cos(point.distance / 100) * 50 + 50 + Math.random() * 5)),
      leclerc: Math.max(0, Math.min(100, -Math.cos(point.distance / 100 + 0.1) * 50 + 50 + Math.random() * 5)),
      hamilton: Math.max(0, Math.min(100, -Math.cos(point.distance / 100 - 0.1) * 50 + 50 + Math.random() * 5)),
    }))
  }

  if (type === "gear") {
    return baseData.map((point) => ({
      ...point,
      verstappen: Math.floor(Math.abs(Math.sin(point.distance / 150) * 7)) + 1,
      leclerc: Math.floor(Math.abs(Math.sin(point.distance / 150 + 0.1) * 7)) + 1,
      hamilton: Math.floor(Math.abs(Math.sin(point.distance / 150 - 0.1) * 7)) + 1,
    }))
  }

  if (type === "drs") {
    return baseData.map((point) => ({
      ...point,
      verstappen:
        point.distance > 200 && point.distance < 400 ? 1 : point.distance > 600 && point.distance < 800 ? 1 : 0,
      leclerc: point.distance > 220 && point.distance < 420 ? 1 : point.distance > 620 && point.distance < 820 ? 1 : 0,
      hamilton: point.distance > 210 && point.distance < 410 ? 1 : point.distance > 610 && point.distance < 810 ? 1 : 0,
    }))
  }

  return baseData
}

export function TelemetryComparisonChart({ type }: { type: string }) {
  const data = generateData(type)

  const renderChart = () => {
    if (type === "speed") {
      return (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="distance" label={{ value: "Distance (m)", position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: "Speed (km/h)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="verstappen" stroke="#0600EF" name="Verstappen" dot={false} />
          <Line type="monotone" dataKey="leclerc" stroke="#DC0000" name="Leclerc" dot={false} />
          <Line type="monotone" dataKey="hamilton" stroke="#00D2BE" name="Hamilton" dot={false} />
        </LineChart>
      )
    }

    if (type === "throttle" || type === "brake") {
      return (
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="distance" label={{ value: "Distance (m)", position: "insideBottom", offset: -5 }} />
          <YAxis
            label={{ value: `${type.charAt(0).toUpperCase() + type.slice(1)} (%)`, angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="verstappen"
            fill="#0600EF"
            stroke="#0600EF"
            name="Verstappen"
            fillOpacity={0.6}
          />
          <Area type="monotone" dataKey="leclerc" fill="#DC0000" stroke="#DC0000" name="Leclerc" fillOpacity={0.6} />
          <Area type="monotone" dataKey="hamilton" fill="#00D2BE" stroke="#00D2BE" name="Hamilton" fillOpacity={0.6} />
        </AreaChart>
      )
    }

    if (type === "gear") {
      return (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="distance" label={{ value: "Distance (m)", position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: "Gear", angle: -90, position: "insideLeft" }} domain={[1, 8]} />
          <Tooltip />
          <Legend />
          <Line type="stepAfter" dataKey="verstappen" stroke="#0600EF" name="Verstappen" dot={false} />
          <Line type="stepAfter" dataKey="leclerc" stroke="#DC0000" name="Leclerc" dot={false} />
          <Line type="stepAfter" dataKey="hamilton" stroke="#00D2BE" name="Hamilton" dot={false} />
        </LineChart>
      )
    }

    if (type === "drs") {
      return (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="distance" label={{ value: "Distance (m)", position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: "DRS", angle: -90, position: "insideLeft" }} domain={[0, 1]} ticks={[0, 1]} />
          <Tooltip />
          <Legend />
          <Line type="stepAfter" dataKey="verstappen" stroke="#0600EF" name="Verstappen" dot={false} />
          <Line type="stepAfter" dataKey="leclerc" stroke="#DC0000" name="Leclerc" dot={false} />
          <Line type="stepAfter" dataKey="hamilton" stroke="#00D2BE" name="Hamilton" dot={false} />
        </LineChart>
      )
    }

    return null
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      {renderChart()}
    </ResponsiveContainer>
  )
}
