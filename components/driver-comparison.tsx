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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const data = [
  { distance: 0, verstappen: 0, leclerc: 0 },
  { distance: 100, verstappen: 120, leclerc: 115 },
  { distance: 200, verstappen: 180, leclerc: 175 },
  { distance: 300, verstappen: 220, leclerc: 210 },
  { distance: 400, verstappen: 260, leclerc: 250 },
  { distance: 500, verstappen: 280, leclerc: 270 },
  { distance: 600, verstappen: 290, leclerc: 285 },
  { distance: 700, verstappen: 310, leclerc: 300 },
  { distance: 800, verstappen: 320, leclerc: 310 },
  { distance: 900, verstappen: 330, leclerc: 320 },
  { distance: 1000, verstappen: 340, leclerc: 330 },
]

const throttleData = [
  { distance: 0, verstappen: 100, leclerc: 100 },
  { distance: 100, verstappen: 100, leclerc: 100 },
  { distance: 200, verstappen: 80, leclerc: 90 },
  { distance: 300, verstappen: 0, leclerc: 10 },
  { distance: 400, verstappen: 0, leclerc: 0 },
  { distance: 500, verstappen: 50, leclerc: 40 },
  { distance: 600, verstappen: 100, leclerc: 100 },
  { distance: 700, verstappen: 100, leclerc: 100 },
  { distance: 800, verstappen: 90, leclerc: 95 },
  { distance: 900, verstappen: 0, leclerc: 0 },
  { distance: 1000, verstappen: 70, leclerc: 60 },
]

const brakeData = [
  { distance: 0, verstappen: 0, leclerc: 0 },
  { distance: 100, verstappen: 0, leclerc: 0 },
  { distance: 200, verstappen: 20, leclerc: 10 },
  { distance: 300, verstappen: 100, leclerc: 90 },
  { distance: 400, verstappen: 80, leclerc: 90 },
  { distance: 500, verstappen: 0, leclerc: 0 },
  { distance: 600, verstappen: 0, leclerc: 0 },
  { distance: 700, verstappen: 0, leclerc: 0 },
  { distance: 800, verstappen: 10, leclerc: 5 },
  { distance: 900, verstappen: 100, leclerc: 100 },
  { distance: 1000, verstappen: 30, leclerc: 40 },
]

export function DriverComparison() {
  return (
    <Tabs defaultValue="speed">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="speed">Speed</TabsTrigger>
        <TabsTrigger value="throttle">Throttle</TabsTrigger>
        <TabsTrigger value="brake">Brake</TabsTrigger>
      </TabsList>
      <TabsContent value="speed" className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="distance" label={{ value: "Distance (m)", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Speed (km/h)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="verstappen" stroke="#0600EF" name="Verstappen" />
            <Line type="monotone" dataKey="leclerc" stroke="#DC0000" name="Leclerc" />
          </LineChart>
        </ResponsiveContainer>
      </TabsContent>
      <TabsContent value="throttle" className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={throttleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="distance" label={{ value: "Distance (m)", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Throttle (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="verstappen" fill="#0600EF" stroke="#0600EF" name="Verstappen" />
            <Area type="monotone" dataKey="leclerc" fill="#DC0000" stroke="#DC0000" name="Leclerc" />
          </AreaChart>
        </ResponsiveContainer>
      </TabsContent>
      <TabsContent value="brake" className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={brakeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="distance" label={{ value: "Distance (m)", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Brake (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="verstappen" fill="#0600EF" stroke="#0600EF" name="Verstappen" />
            <Area type="monotone" dataKey="leclerc" fill="#DC0000" stroke="#DC0000" name="Leclerc" />
          </AreaChart>
        </ResponsiveContainer>
      </TabsContent>
    </Tabs>
  )
}
