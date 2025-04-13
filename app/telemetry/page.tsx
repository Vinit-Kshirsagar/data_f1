import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TelemetryComparisonChart } from "@/components/telemetry-comparison-chart"
import { DriverSelector } from "@/components/driver-selector"

export default function TelemetryPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1 p-4 md:p-6">
        <Card className="col-span-full mb-4">
          <CardHeader>
            <CardTitle>Telemetry Comparison</CardTitle>
            <CardDescription>Compare telemetry data between drivers</CardDescription>
          </CardHeader>
          <CardContent>
            <DriverSelector />
          </CardContent>
        </Card>

        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Telemetry Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="speed">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="speed">Speed</TabsTrigger>
                <TabsTrigger value="throttle">Throttle</TabsTrigger>
                <TabsTrigger value="brake">Brake</TabsTrigger>
                <TabsTrigger value="gear">Gear</TabsTrigger>
                <TabsTrigger value="drs">DRS</TabsTrigger>
              </TabsList>
              <TabsContent value="speed" className="h-[500px]">
                <TelemetryComparisonChart type="speed" />
              </TabsContent>
              <TabsContent value="throttle" className="h-[500px]">
                <TelemetryComparisonChart type="throttle" />
              </TabsContent>
              <TabsContent value="brake" className="h-[500px]">
                <TelemetryComparisonChart type="brake" />
              </TabsContent>
              <TabsContent value="gear" className="h-[500px]">
                <TelemetryComparisonChart type="gear" />
              </TabsContent>
              <TabsContent value="drs" className="h-[500px]">
                <TelemetryComparisonChart type="drs" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
