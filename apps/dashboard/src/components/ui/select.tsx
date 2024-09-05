"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

import { cn } from "@repo/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "dd-flex dd-h-10 dd-w-full dd-items-center dd-justify-between dd-rounded-md dd-border dd-border-input dd-bg-background dd-px-3 dd-py-2 dd-text-sm dd-ring-offset-background placeholder:dd-text-muted-foreground focus:dd-outline-none focus:dd-ring-2 focus:dd-ring-ring focus:dd-ring-offset-2 disabled:dd-cursor-not-allowed disabled:dd-opacity-50 [&>span]:dd-line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className="dd-h-4 dd-w-4 dd-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "dd-flex dd-cursor-default dd-items-center dd-justify-center dd-py-1",
      className,
    )}
    {...props}
  >
    <ChevronUpIcon className="dd-h-4 dd-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "dd-flex dd-cursor-default dd-items-center dd-justify-center dd-py-1",
      className,
    )}
    {...props}
  >
    <ChevronDownIcon className="dd-h-4 dd-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "dd-relative dd-z-50 dd-max-h-96 dd-min-w-[8rem] dd-overflow-hidden dd-rounded-md dd-border dd-bg-popover dd-text-popover-foreground dd-shadow-md data-[state=open]:dd-animate-in data-[state=closed]:dd-animate-out data-[state=closed]:dd-fade-out-0 data-[state=open]:dd-fade-in-0 data-[state=closed]:dd-zoom-out-95 data-[state=open]:dd-zoom-in-95 data-[side=bottom]:dd-slide-in-from-top-2 data-[side=left]:dd-slide-in-from-right-2 data-[side=right]:dd-slide-in-from-left-2 data-[side=top]:dd-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:dd-translate-y-1 data-[side=left]:dd--translate-x-1 data-[side=right]:dd-translate-x-1 data-[side=top]:dd--translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "dd-p-1",
          position === "popper" &&
            "dd-h-[var(--radix-select-trigger-height)] dd-w-full dd-min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "dd-py-1.5 dd-pl-8 dd-pr-2 dd-text-sm dd-font-semibold",
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "dd-relative dd-flex dd-w-full dd-cursor-default dd-select-none dd-items-center dd-rounded-sm dd-py-1.5 dd-pl-8 dd-pr-2 dd-text-sm dd-outline-none focus:dd-bg-accent focus:dd-text-accent-foreground data-[disabled]:dd-pointer-events-none data-[disabled]:dd-opacity-50",
      className,
    )}
    {...props}
  >
    <span className="dd-absolute dd-left-2 dd-flex dd-h-3.5 dd-w-3.5 dd-items-center dd-justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="dd-h-4 dd-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("dd--mx-1 dd-my-1 dd-h-px dd-bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
