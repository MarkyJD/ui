'use client'

import * as React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { addDays, format } from 'date-fns'
import type { DateRange } from 'react-day-picker'

import { ny } from '~/lib/utils'
import { Button } from '~/registry/miami/ui/button'
import { Calendar } from '~/registry/miami/ui/calendar'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '~/registry/miami/ui/popover'

export default function DatePickerWithRange({
   className,
}: React.HTMLAttributes<HTMLDivElement>) {
   const [date, setDate] = React.useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
   })

   return (
      <div className={ny('grid gap-2', className)}>
         <Popover>
            <PopoverTrigger asChild>
               <Button
                  id="date"
                  variant="outline"
                  className={ny(
                     'w-[300px] justify-start text-left font-normal',
                     !date && 'text-muted-foreground',
                  )}
               >
                  <CalendarIcon className="mr-2 size-4" />
                  {date?.from
                     ? (
                           date.to
                              ? (
                                    <>
                                       {format(date.from, 'LLL dd, y')}
                                       {' '}
                                       -
                                       {' '}
                                       {format(date.to, 'LLL dd, y')}
                                    </>
                                 )
                              : (
                                    format(date.from, 'LLL dd, y')
                                 )
                        )
                     : (
                           <span>Pick a date</span>
                        )}
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
               <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
               />
            </PopoverContent>
         </Popover>
      </div>
   )
}
