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
        "pc-text-chip",
        "pc-bg-[linear-gradient(var(--text-color)_0_0)] pc-bg-[length:100%_var(--d,0)] pc-bg-bottom pc-bg-no-repeat pc-transition-[background-size] pc-duration-300 hover:pc-text-[rgb(var(--page-background))] hover:[--d:100%]",
        !backgroundIndicator &&
          "pc-aspect-square pc-h-6 pc-w-6 pc-overflow-hidden pc-rounded-full pc-border-2 pc-border-crema-cream-500 disabled:pc-cursor-not-allowed disabled:pc-opacity-50",
        backgroundIndicator &&
          "pc-flex pc-w-fit pc-cursor-pointer pc-items-center pc-justify-center pc-gap-2 pc-rounded-full pc-px-4 pc-py-1 pc-shadow-[inset_0px_0px_0px_2px] pc-shadow-crema-cream-500 [&[data-state=checked]]:pc-bg-crema-cream-500 [&[data-state=checked]]:pc-text-black-mamba-500",
        className,
      )}
      {...props}
    >
      {!backgroundIndicator && (
        <RadioGroupPrimitive.Indicator className="pc-block pc-h-full pc-w-full pc-bg-crema-cream-500" />
      )}
      {backgroundIndicator && children}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
