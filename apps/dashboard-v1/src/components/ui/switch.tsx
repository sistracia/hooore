"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@repo/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "dd-peer dd-inline-flex dd-h-6 dd-w-11 dd-shrink-0 dd-cursor-pointer dd-items-center dd-rounded-full dd-border-2 dd-border-transparent dd-transition-colors focus-visible:dd-outline-none focus-visible:dd-ring-2 focus-visible:dd-ring-ring focus-visible:dd-ring-offset-2 focus-visible:dd-ring-offset-background disabled:dd-cursor-not-allowed disabled:dd-opacity-50 data-[state=checked]:dd-bg-primary data-[state=unchecked]:dd-bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "dd-pointer-events-none dd-block dd-h-5 dd-w-5 dd-rounded-full dd-bg-background dd-shadow-lg dd-ring-0 dd-transition-transform data-[state=checked]:dd-translate-x-5 data-[state=unchecked]:dd-translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
