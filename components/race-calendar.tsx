"use client"

import { CalendarIcon, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const races = [
  {
    name: "Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    location: "Sakhir, Bahrain",
    date: "March 2, 2024",
    status: "completed",
    winner: "Max Verstappen",
  },
  {
    name: "Saudi Arabian Grand Prix",
    circuit: "Jeddah Corniche Circuit",
    location: "Jeddah, Saudi Arabia",
    date: "March 9, 2024",
    status: "completed",
    winner: "Max Verstappen",
  },
  {
    name: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    location: "Melbourne, Australia",
    date: "March 24, 2024",
    status: "completed",
    winner: "Carlos Sainz",
  },
  {
    name: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    location: "Suzuka, Japan",
    date: "April 7, 2024",
    status: "completed",
    winner: "Max Verstappen",
  },
  {
    name: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    location: "Shanghai, China",
    date: "April 21, 2024",
    status: "completed",
    winner: "Max Verstappen",
  },
  {
    name: "Miami Grand Prix",
    circuit: "Miami International Autodrome",
    location: "Miami, USA",
    date: "May 5, 2024",
    status: "upcoming",
  },
  {
    name: "Emilia Romagna Grand Prix",
    circuit: "Autodromo Enzo e Dino Ferrari",
    location: "Imola, Italy",
    date: "May 19, 2024",
    status: "upcoming",
  },
  {
    name: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    location: "Monte Carlo, Monaco",
    date: "May 26, 2024",
    status: "upcoming",
  },
]

export function RaceCalendar() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {races.map((race, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle>{race.name}</CardTitle>
              {race.status === "completed" && (
                <Badge variant="outline" className="border-green-500 text-green-500">
                  Completed
                </Badge>
              )}
              {race.status === "upcoming" && (
                <Badge variant="outline" className="border-blue-500 text-blue-500">
                  Upcoming
                </Badge>
              )}
            </div>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {race.circuit}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <CalendarIcon className="h-3 w-3" />
                {race.date}
              </div>
              <div className="mt-1 text-muted-foreground">{race.location}</div>
              {race.status === "completed" && race.winner && (
                <div className="mt-2">
                  <span className="text-muted-foreground">Winner: </span>
                  <span className="font-medium">{race.winner}</span>
                </div>
              )}
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href={`/telemetry?race=${race.name.toLowerCase().replace(/\s+/g, "-")}`}>View Telemetry</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
