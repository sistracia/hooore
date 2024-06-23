"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

import { cn } from "@repo/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("comp-border-b comp-border-ink-cumi-100", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "comp-flex comp-w-full comp-flex-1 comp-items-center comp-justify-between comp-py-6 comp-text-left comp-text-xl comp-font-semibold comp-text-ink-cumi-500 comp-transition-all hover:comp-underline [&[data-state=closed]>svg:nth-last-child(2)]:comp-hidden [&[data-state=open]>svg:last-child]:comp-hidden",
        className,
      )}
      {...props}
    >
      {children}
      <MinusIcon className="comp-h-4 comp-w-4 comp-shrink-0 comp-text-ink-cumi-500" />
      <PlusIcon className="comp-h-4 comp-w-4 comp-shrink-0 comp-text-ink-cumi-500" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="comp-overflow-hidden comp-text-ink-cumi-500 data-[state=closed]:comp-animate-accordion-up data-[state=open]:comp-animate-accordion-down"
    {...props}
  >
    <div className={cn("comp-pb-7 comp-pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
