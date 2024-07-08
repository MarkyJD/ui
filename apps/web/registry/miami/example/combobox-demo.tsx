'use client'

import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

import { ny } from '~/lib/utils'
import { Button } from '~/registry/miami/ui/button'
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '~/registry/miami/ui/command'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '~/registry/miami/ui/popover'

const frameworks = [
   {
      value: 'next.js',
      label: 'Next.js',
   },
   {
      value: 'sveltekit',
      label: 'SvelteKit',
   },
   {
      value: 'nuxt.js',
      label: 'Nuxt.js',
   },
   {
      value: 'remix',
      label: 'Remix',
   },
   {
      value: 'astro',
      label: 'Astro',
   },
]

export default function ComboboxDemo() {
   const [open, setOpen] = React.useState(false)
   const [value, setValue] = React.useState('')

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               variant="outline"
               role="combobox"
               aria-expanded={open}
               className="w-[200px] justify-between"
            >
               {value
                  ? frameworks.find(framework => framework.value === value)?.label
                  : 'Select framework...'}
               <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-[200px] p-0">
            <Command>
               <CommandInput placeholder="Search framework..." className="h-9" />
               <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                     {frameworks.map(framework => (
                        <CommandItem
                           key={framework.value}
                           value={framework.value}
                           onSelect={(currentValue) => {
                              setValue(currentValue === value ? '' : currentValue)
                              setOpen(false)
                           }}
                        >
                           {framework.label}
                           <CheckIcon
                              className={ny(
                                 'ml-auto size-4',
                                 value === framework.value ? 'opacity-100' : 'opacity-0',
                              )}
                           />
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   )
}
