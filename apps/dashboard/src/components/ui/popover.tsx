"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@repo/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "dd-z-50 dd-w-72 dd-rounded-md dd-border dd-bg-popover dd-text-popover-foreground dd-shadow-md dd-outline-none data-[state=open]:dd-animate-in data-[state=closed]:dd-animate-out data-[state=closed]:dd-fade-out-0 data-[state=open]:dd-fade-in-0 data-[state=closed]:dd-zoom-out-95 data-[state=open]:dd-zoom-in-95 data-[side=bottom]:dd-slide-in-from-top-2 data-[side=left]:dd-slide-in-from-right-2 data-[side=right]:dd-slide-in-from-left-2 data-[side=top]:dd-slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
