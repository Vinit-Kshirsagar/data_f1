import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LapTimeChart } from "@/components/lap-time-chart"
import { RaceSelector } from "@/components/race-selector"
import { DriverSelector } from "@/components/driver-selector"

export default function LapTimesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1 p-4 md:p-6">
        <Card className="col-span-full mb-4">
          <CardHeader>
            <CardTitle>Lap Time Analysis</CardTitle>
            <CardDescription>Analyze lap times for selected drivers</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-medium">Select Race</h3>
              <RaceSelector />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Select Drivers</h3>
              <DriverSelector />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Lap Time Comparison</CardTitle>
          </CardHeader>
          <CardContent className="h-[500px]">
            <LapTimeChart />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
