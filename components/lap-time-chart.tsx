"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Sample data - in a real app, this would come from the FastF1 API
const lapTimeData = [
  { lap: 1, verstappen: 95.423, leclerc: 95.612, hamilton: 95.821 },
  { lap: 2, verstappen: 94.821, leclerc: 94.932, hamilton: 95.123 },
  { lap: 3, verstappen: 94.532, leclerc: 94.621, hamilton: 94.832 },
  { lap: 4, verstappen: 94.321, leclerc: 94.532, hamilton: 94.621 },
  { lap: 5, verstappen: 94.123, leclerc: 94.321, hamilton: 94.532 },
  { lap: 6, verstappen: 94.021, leclerc: 94.123, hamilton: 94.321 },
  { lap: 7, verstappen: 93.921, leclerc: 94.021, hamilton: 94.123 },
  { lap: 8, verstappen: 93.821, leclerc: 93.921, hamilton: 94.021 },
  { lap: 9, verstappen: 93.721, leclerc: 93.821, hamilton: 93.921 },
  { lap: 10, verstappen: 93.621, leclerc: 93.721, hamilton: 93.821 },
  { lap: 11, verstappen: 93.521, leclerc: 93.621, hamilton: 93.721 },
  { lap: 12, verstappen: 93.421, leclerc: 93.521, hamilton: 93.621 },
  { lap: 13, verstappen: 93.321, leclerc: 93.421, hamilton: 93.521 },
  { lap: 14, verstappen: 93.221, leclerc: 93.321, hamilton: 93.421 },
  { lap: 15, verstappen: 93.121, leclerc: 93.221, hamilton: 93.321 },
]

// Calculate gap to leader
const gapData = lapTimeData.map((lap, index) => {
  // Find the minimum lap time for this lap
  const minLapTime = Math.min(lap.verstappen, lap.leclerc, lap.hamilton)

  // Calculate cumulative time up to this lap
  let verstappenCumulative = 0
  let leclercCumulative = 0
  let hamiltonCumulative = 0

  for (let i = 0; i <= index; i++) {
    verstappenCumulative += lapTimeData[i].verstappen
    leclercCumulative += lapTimeData[i].leclerc
    hamiltonCumulative += lapTimeData[i].hamilton
  }

  // Find the minimum cumulative time
  const minCumulative = Math.min(verstappenCumulative, leclercCumulative, hamiltonCumulative)

  return {
    lap: lap.lap,
    verstappenGap: verstappenCumulative - minCumulative,
    leclercGap: leclercCumulative - minCumulative,
    hamiltonGap: hamiltonCumulative - minCumulative,
  }
})

export function LapTimeChart() {
  return (
    <div className="grid h-full grid-rows-2 gap-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Lap Times</h3>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={lapTimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="lap" label={{ value: "Lap", position: "insideBottom", offset: -5 }} />
            <YAxis
              label={{ value: "Time (s)", angle: -90, position: "insideLeft" }}
              domain={["dataMin - 0.5", "dataMax + 0.5"]}
            />
            <Tooltip formatter={(value) => value.toFixed(3) + "s"} />
            <Legend />
            <Line type="monotone" dataKey="verstappen" stroke="#0600EF" name="Verstappen" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="leclerc" stroke="#DC0000" name="Leclerc" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="hamilton" stroke="#00D2BE" name="Hamilton" dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Gap to Leader</h3>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={gapData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="lap" label={{ value: "Lap", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Gap (s)", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => value.toFixed(3) + "s"} />
            <Legend />
            <Line type="monotone" dataKey="verstappenGap" stroke="#0600EF" name="Verstappen" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="leclercGap" stroke="#DC0000" name="Leclerc" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="hamiltonGap" stroke="#00D2BE" name="Hamilton" dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
