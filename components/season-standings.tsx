"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const driverStandings = [
  { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 143 },
  { position: 2, driver: "Sergio Perez", team: "Red Bull Racing", points: 104 },
  { position: 3, driver: "Charles Leclerc", team: "Ferrari", points: 92 },
  { position: 4, driver: "Carlos Sainz", team: "Ferrari", points: 79 },
  { position: 5, driver: "Lando Norris", team: "McLaren", points: 58 },
  { position: 6, driver: "Lewis Hamilton", team: "Mercedes", points: 47 },
  { position: 7, driver: "George Russell", team: "Mercedes", points: 42 },
  { position: 8, driver: "Oscar Piastri", team: "McLaren", points: 34 },
  { position: 9, driver: "Fernando Alonso", team: "Aston Martin", points: 33 },
  { position: 10, driver: "Lance Stroll", team: "Aston Martin", points: 9 },
]

const teamStandings = [
  { position: 1, team: "Red Bull Racing", points: 247 },
  { position: 2, team: "Ferrari", points: 171 },
  { position: 3, team: "McLaren", points: 92 },
  { position: 4, team: "Mercedes", points: 89 },
  { position: 5, team: "Aston Martin", points: 42 },
]

export function SeasonStandings() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Driver Standings</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Pos</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {driverStandings.map((standing) => (
              <TableRow key={standing.position}>
                <TableCell>{standing.position}</TableCell>
                <TableCell>{standing.driver}</TableCell>
                <TableCell>{standing.team}</TableCell>
                <TableCell className="text-right">{standing.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Constructor Standings</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Pos</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamStandings.map((standing) => (
              <TableRow key={standing.position}>
                <TableCell>{standing.position}</TableCell>
                <TableCell>{standing.team}</TableCell>
                <TableCell className="text-right">{standing.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
