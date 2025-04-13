"use client"

import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const races = [
  {
    name: "Bahrain Grand Prix",
    date: "March 2, 2024",
    winner: "Max Verstappen",
    team: "Red Bull Racing",
  },
  {
    name: "Saudi Arabian Grand Prix",
    date: "March 9, 2024",
    winner: "Max Verstappen",
    team: "Red Bull Racing",
  },
  {
    name: "Australian Grand Prix",
    date: "March 24, 2024",
    winner: "Carlos Sainz",
    team: "Ferrari",
  },
  {
    name: "Japanese Grand Prix",
    date: "April 7, 2024",
    winner: "Max Verstappen",
    team: "Red Bull Racing",
  },
  {
    name: "Chinese Grand Prix",
    date: "April 21, 2024",
    winner: "Max Verstappen",
    team: "Red Bull Racing",
  },
]

export function RecentRaces() {
  return (
    <div className="space-y-4">
      {races.map((race, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="flex-1">
            <div className="font-medium">{race.name}</div>
            <div className="text-xs text-muted-foreground">{race.date}</div>
          </div>
          <Badge
            variant="outline"
            className={cn(
              "flex items-center gap-1",
              race.team === "Red Bull Racing"
                ? "border-blue-800 text-blue-800"
                : race.team === "Ferrari"
                  ? "border-red-600 text-red-600"
                  : "",
            )}
          >
            <Trophy className="h-3 w-3" />
            {race.winner}
          </Badge>
        </div>
      ))}
    </div>
  )
}
