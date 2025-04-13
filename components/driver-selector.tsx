"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const drivers = [
  { value: "verstappen", label: "Max Verstappen", team: "Red Bull" },
  { value: "perez", label: "Sergio Perez", team: "Red Bull" },
  { value: "leclerc", label: "Charles Leclerc", team: "Ferrari" },
  { value: "sainz", label: "Carlos Sainz", team: "Ferrari" },
  { value: "hamilton", label: "Lewis Hamilton", team: "Mercedes" },
  { value: "russell", label: "George Russell", team: "Mercedes" },
  { value: "norris", label: "Lando Norris", team: "McLaren" },
  { value: "piastri", label: "Oscar Piastri", team: "McLaren" },
  { value: "alonso", label: "Fernando Alonso", team: "Aston Martin" },
  { value: "stroll", label: "Lance Stroll", team: "Aston Martin" },
]

type DriverSelectorProps = {
  maxDrivers?: number
}

export function DriverSelector({ maxDrivers = 3 }: DriverSelectorProps) {
  const [open, setOpen] = useState(false)
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>(["verstappen", "leclerc"])

  return (
    <div className="flex flex-col gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {selectedDrivers.length > 0 ? (
              <>
                <span className="mr-2">
                  {selectedDrivers.length} driver{selectedDrivers.length > 1 ? "s" : ""} selected
                </span>
                <div className="flex gap-1">
                  {selectedDrivers.slice(0, 2).map((value) => (
                    <Badge variant="secondary" key={value} className="rounded-sm px-1 font-normal">
                      {drivers.find((driver) => driver.value === value)?.label}
                    </Badge>
                  ))}
                  {selectedDrivers.length > 2 && (
                    <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                      +{selectedDrivers.length - 2}
                    </Badge>
                  )}
                </div>
              </>
            ) : (
              "Select drivers..."
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search drivers..." />
            <CommandList>
              <CommandEmpty>No driver found.</CommandEmpty>
              <CommandGroup>
                {drivers.map((driver) => {
                  const isSelected = selectedDrivers.includes(driver.value)
                  return (
                    <CommandItem
                      key={driver.value}
                      onSelect={() => {
                        if (isSelected) {
                          setSelectedDrivers(selectedDrivers.filter((d) => d !== driver.value))
                        } else if (selectedDrivers.length < maxDrivers) {
                          setSelectedDrivers([...selectedDrivers, driver.value])
                        }
                      }}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      <span>{driver.label}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{driver.team}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
              {selectedDrivers.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem onSelect={() => setSelectedDrivers([])} className="justify-center text-center">
                      Clear
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex flex-wrap gap-1">
        {selectedDrivers.map((value) => {
          const driver = drivers.find((d) => d.value === value)
          return driver ? (
            <Badge key={value} variant="outline" className="rounded-sm px-2 py-1 font-normal">
              {driver.label}
              <Button
                variant="ghost"
                size="sm"
                className="ml-1 h-4 w-4 p-0"
                onClick={() => setSelectedDrivers(selectedDrivers.filter((d) => d !== value))}
              >
                <span className="sr-only">Remove</span>
                <span>×</span>
              </Button>
            </Badge>
          ) : null
        })}
      </div>
    </div>
  )
}
