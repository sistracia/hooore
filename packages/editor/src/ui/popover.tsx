'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

import { cn } from '@hooore/utils'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'editor-bg-popover editor-text-popover-foreground data-[state=open]:editor-animate-in data-[state=closed]:editor-animate-out data-[state=closed]:editor-fade-out-0 data-[state=open]:editor-fade-in-0 data-[state=closed]:editor-zoom-out-95 data-[state=open]:editor-zoom-in-95 data-[side=bottom]:editor-slide-in-from-top-2 data-[side=left]:editor-slide-in-from-right-2 data-[side=right]:editor-slide-in-from-left-2 data-[side=top]:editor-slide-in-from-bottom-2 editor-z-50 editor-w-72 editor-rounded-md editor-border editor-p-4 editor-shadow-md editor-outline-none',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverContent, PopoverTrigger }
