import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RaceCalendar } from "@/components/race-calendar"

export default function RacesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1 p-4 md:p-6">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Race Calendar</CardTitle>
            <CardDescription>Select a race to view detailed information and telemetry</CardDescription>
          </CardHeader>
          <CardContent>
            <RaceCalendar />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
