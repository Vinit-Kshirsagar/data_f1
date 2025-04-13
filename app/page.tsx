import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RaceSelector } from "@/components/race-selector"
import { DriverComparison } from "@/components/driver-comparison"
import { CircuitMap } from "@/components/circuit-map"
import { RecentRaces } from "@/components/recent-races"
import { SeasonStandings } from "@/components/season-standings"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-red-600 font-bold text-2xl">F1</span>
          <span>Telemetry Dashboard</span>
        </Link>
        <nav className="ml-auto flex gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/races">Races</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/telemetry">Telemetry</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/lap-times">Lap Times</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Formula 1 Telemetry Analysis</CardTitle>
              <CardDescription>Select a race and drivers to analyze telemetry data</CardDescription>
            </CardHeader>
            <CardContent>
              <RaceSelector />
            </CardContent>
          </Card>
          <Card className="col-span-full md:col-span-2">
            <CardHeader>
              <CardTitle>Driver Comparison</CardTitle>
              <CardDescription>Compare telemetry data between drivers</CardDescription>
            </CardHeader>
            <CardContent>
              <DriverComparison />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Circuit Map</CardTitle>
              <CardDescription>Current circuit layout</CardDescription>
            </CardHeader>
            <CardContent>
              <CircuitMap />
            </CardContent>
          </Card>
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="speed">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="speed">Speed</TabsTrigger>
                  <TabsTrigger value="throttle">Throttle</TabsTrigger>
                  <TabsTrigger value="brake">Brake</TabsTrigger>
                  <TabsTrigger value="gear">Gear</TabsTrigger>
                </TabsList>
                <TabsContent value="speed" className="h-[300px]">
                  <TelemetryChart type="speed" />
                </TabsContent>
                <TabsContent value="throttle" className="h-[300px]">
                  <TelemetryChart type="throttle" />
                </TabsContent>
                <TabsContent value="brake" className="h-[300px]">
                  <TelemetryChart type="brake" />
                </TabsContent>
                <TabsContent value="gear" className="h-[300px]">
                  <TelemetryChart type="gear" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Races</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentRaces />
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Season Standings</CardTitle>
            </CardHeader>
            <CardContent>
              <SeasonStandings />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function TelemetryChart({ type }: { type: string }) {
  return (
    <div className="flex h-full items-center justify-center text-muted-foreground">
      {type.charAt(0).toUpperCase() + type.slice(1)} telemetry chart will be displayed here
    </div>
  )
}
