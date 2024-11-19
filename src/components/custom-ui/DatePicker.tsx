'use client'

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { addMonths, format, getMonth, isAfter, setMonth, setYear, subMonths } from 'date-fns'
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export default function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const months = [
    {
      title: 'January',
      value: '0'
    },
    {
      title: 'February',
      value: '1'
    },
    {
      title: 'March',
      value: '2'
    },
    {
      title: 'April',
      value: '3'
    },
    {
      title: 'May',
      value: '4'
    },
    {
      title: 'June',
      value: '5'
    },
    {
      title: 'July',
      value: '6'
    },
    {
      title: 'August',
      value: '7'
    },
    {
      title: 'September',
      value: '8'
    },
    {
      title: 'October',
      value: '9'
    },
    {
      title: 'November',
      value: '10'
    },
    {
      title: 'December',
      value: '11'
    },
  ]

  const currentYear = Number(format(new Date(), 'yyyy'))
  const years = [1955]

  do {
    years.push(years[years.length - 1] + 1)
  } while (years[years.length - 1] < currentYear)

  const handlePrevMonth = () => {
    setDate(prev => !!prev ? subMonths(prev, 1) : undefined)
  }

  const handleNextMonth = () => {
    setDate(prev => !!prev ? addMonths(prev, 1) : undefined)
  }

  const handleMonthChange = (value: string) => {
    const newDate = setMonth(date as Date, Number(value))
    setDate(newDate)
  }

  const handleYearChange = (value: string) => {
    const newDate = setYear(date as Date, Number(value))
    setDate(newDate)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            "flex items-center gap-3 border rounded-md px-3 py-1 h-auto w-full",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="text-white" />
          <div className="grow text-left font-medium h-10 flex items-center">
            {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={date}
          showOutsideDays
          captionLayout="dropdown"
          disabled={(dateOption: Date) => isAfter(dateOption, new Date())}
          components={{
            Caption: () => {
              return (
                <div className="flex items-center justify-between">
                  <Button variant='ghost' className="p-1" onClick={handlePrevMonth}>
                    <ChevronLeftIcon />
                  </Button>
                  <div className="flex items-center gap-1">
                    <Select
                      defaultValue={String(getMonth(new Date()))}
                      onValueChange={handleMonthChange}
                      value={date ? String(getMonth(date)) : undefined}
                    >
                      <SelectTrigger className="border-0 gap-2 focus:ring-0 focus:ring-offset-0 hover:bg-accent">
                        <SelectValue placeholder='Month' />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          months.map((month, i) => (
                            <SelectItem key={i} value={month.value} className="hover:cursor-pointer">
                              {month.title}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>

                    <Select
                      defaultValue={String(currentYear)}
                      onValueChange={handleYearChange}
                      value={date ? format(date, 'yyyy') : undefined}
                    >
                      <SelectTrigger className="border-0 gap-2 focus:ring-0 focus:ring-offset-0 hover:bg-accent">
                        <SelectValue placeholder='Year' />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          years.map((year, i) => (
                            <SelectItem key={i} value={String(year)} className="hover:cursor-pointer">
                              {year}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant='ghost' className="p-1" onClick={handleNextMonth}>
                    <ChevronRightIcon />
                  </Button>
                </div>
              )
            }
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
