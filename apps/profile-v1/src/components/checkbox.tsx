"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@repo/utils";
import { CheckIcon } from "@radix-ui/react-icons";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "ss-peer ss-h-6 ss-w-6 ss-shrink-0 ss-rounded-md ss-border ss-border-crema-cream-500 ss-text-current disabled:ss-cursor-not-allowed disabled:ss-opacity-50 data-[state=checked]:ss-bg-crema-cream-500 data-[state=checked]:ss-text-black-mamba-400",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="ss-flex ss-items-center ss-justify-center">
      <CheckIcon className="ss-h-full ss-w-full" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
