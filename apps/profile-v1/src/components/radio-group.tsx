"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@repo/utils";

const RadioGroup = RadioGroupPrimitive.Root;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    backgroundIndicator?: boolean;
  }
>(({ className, backgroundIndicator = false, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "ss-text-chip",
        "ss-bg-[linear-gradient(var(--text-color)_0_0)] ss-bg-[length:100%_var(--d,0)] ss-bg-bottom ss-bg-no-repeat ss-transition-[background-size] ss-duration-300 hover:ss-text-[rgb(var(--page-background))] hover:[--d:100%]",
        !backgroundIndicator &&
          "ss-aspect-square ss-h-6 ss-w-6 ss-overflow-hidden ss-rounded-full ss-border-2 ss-border-crema-cream-500 disabled:ss-cursor-not-allowed disabled:ss-opacity-50",
        backgroundIndicator &&
          "ss-flex ss-w-fit ss-cursor-pointer ss-items-center ss-justify-center ss-gap-2 ss-rounded-full ss-px-4 ss-py-1 ss-shadow-[inset_0px_0px_0px_2px] ss-shadow-crema-cream-500 [&[data-state=checked]]:ss-bg-crema-cream-500 [&[data-state=checked]]:ss-text-black-mamba-500",
        className,
      )}
      {...props}
    >
      {!backgroundIndicator && (
        <RadioGroupPrimitive.Indicator className="ss-block ss-h-full ss-w-full ss-bg-crema-cream-500" />
      )}
      {backgroundIndicator && children}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
