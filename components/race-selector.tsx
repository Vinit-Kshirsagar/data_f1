"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const races = [
  { value: "bahrain", label: "Bahrain Grand Prix" },
  { value: "saudi-arabia", label: "Saudi Arabian Grand Prix" },
  { value: "australia", label: "Australian Grand Prix" },
  { value: "japan", label: "Japanese Grand Prix" },
  { value: "china", label: "Chinese Grand Prix" },
  { value: "miami", label: "Miami Grand Prix" },
  { value: "emilia-romagna", label: "Emilia Romagna Grand Prix" },
  { value: "monaco", label: "Monaco Grand Prix" },
  { value: "canada", label: "Canadian Grand Prix" },
  { value: "spain", label: "Spanish Grand Prix" },
]

export function RaceSelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("bahrain")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {value ? races.find((race) => race.value === value)?.label : "Select race..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search race..." />
          <CommandList>
            <CommandEmpty>No race found.</CommandEmpty>
            <CommandGroup>
              {races.map((race) => (
                <CommandItem
                  key={race.value}
                  value={race.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === race.value ? "opacity-100" : "opacity-0")} />
                  {race.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
