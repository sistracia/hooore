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
      "pc-peer pc-h-6 pc-w-6 pc-shrink-0 pc-rounded-md pc-border pc-border-crema-cream-500 pc-text-current disabled:pc-cursor-not-allowed disabled:pc-opacity-50 data-[state=checked]:pc-bg-crema-cream-500 data-[state=checked]:pc-text-black-mamba-400",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="pc-flex pc-items-center pc-justify-center">
      <CheckIcon className="pc-h-full pc-w-full" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
