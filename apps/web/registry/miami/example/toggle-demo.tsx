import { FontBoldIcon } from '@radix-ui/react-icons'

import { Toggle } from '~/registry/miami/ui/toggle'

export default function ToggleDemo() {
   return (
      <Toggle aria-label="Toggle italic">
         <FontBoldIcon className="size-4" />
      </Toggle>
   )
}
