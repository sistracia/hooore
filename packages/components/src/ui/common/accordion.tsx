'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import * as React from 'react'

import { cn } from '@hooore/utils'

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn('pc-w-full', className)}
    {...props}
  />
))
Accordion.displayName = 'Accordion'

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('pc-border-b', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    closeIcon?: React.ReactNode
    openIcon?: React.ReactNode
  }
>((props, ref) => {
  const {
    className,
    children,
    closeIcon = <MinusIcon className="pc-h-4 pc-w-4 pc-shrink-0" />,
    openIcon = <PlusIcon className="pc-h-4 pc-w-4 pc-shrink-0" />,
    ...restProps
  } = props

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'pc-flex pc-w-full pc-flex-1 pc-items-center pc-justify-between pc-py-6 pc-text-left pc-text-h4 pc-font-semibold pc-transition-all sm:pc-text-h4-sm [&[data-state=closed]>svg:nth-last-child(2)]:pc-hidden [&[data-state=open]>svg:last-child]:pc-hidden',
          className,
        )}
        {...restProps}
      >
        {children}
        {closeIcon}
        {openIcon}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'pc-overflow-hidden pc-pb-7 pc-pt-0 data-[state=closed]:pc-animate-accordion-up data-[state=open]:pc-animate-accordion-down',
      className,
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
