"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "@repo/utils";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "@radix-ui/react-icons";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "pc-flex pc-cursor-default pc-select-none pc-items-center pc-rounded-full pc-border-2 pc-border-transparent pc-px-2 pc-py-1.5 pc-text-sm pc-outline-none focus:pc-border-crema-cream-500 data-[state=open]:pc-border-crema-cream-500",
      inset && "pc-pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="pc-ml-auto pc-h-4 pc-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "pc-z-50 pc-min-w-[8rem] pc-overflow-hidden pc-rounded-md pc-bg-black-mamba-400 pc-p-1 pc-shadow-lg data-[state=open]:pc-animate-in data-[state=closed]:pc-animate-out data-[state=closed]:pc-fade-out-0 data-[state=open]:pc-fade-in-0 data-[state=closed]:pc-zoom-out-95 data-[state=open]:pc-zoom-in-95 data-[side=bottom]:pc-slide-in-from-top-2 data-[side=left]:pc-slide-in-from-right-2 data-[side=right]:pc-slide-in-from-left-2 data-[side=top]:pc-slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "pc-z-50 pc-min-w-[8rem] pc-overflow-hidden pc-rounded-md pc-bg-black-mamba-400 pc-p-1 pc-shadow-md data-[state=open]:pc-animate-in data-[state=closed]:pc-animate-out data-[state=closed]:pc-fade-out-0 data-[state=open]:pc-fade-in-0 data-[state=closed]:pc-zoom-out-95 data-[state=open]:pc-zoom-in-95 data-[side=bottom]:pc-slide-in-from-top-2 data-[side=left]:pc-slide-in-from-right-2 data-[side=right]:pc-slide-in-from-left-2 data-[side=top]:pc-slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "focus:text-accent-crema-cream-500 pc-relative pc-flex pc-cursor-default pc-select-none pc-items-center pc-rounded-full pc-border-2 pc-border-transparent pc-px-2 pc-py-1.5 pc-text-sm pc-outline-none pc-transition-colors focus:pc-border-crema-cream-500 data-[disabled]:pc-pointer-events-none data-[disabled]:pc-opacity-50",
      inset && "pc-pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "focus:text-accent-crema-cream-500 pc-relative pc-flex pc-cursor-default pc-select-none pc-items-center pc-rounded-full pc-border-2 pc-border-transparent pc-py-1.5 pc-pl-8 pc-pr-2 pc-text-sm pc-outline-none pc-transition-colors focus:pc-border-crema-cream-500 data-[disabled]:pc-pointer-events-none data-[disabled]:pc-opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="pc-absolute pc-left-2 pc-flex pc-h-3.5 pc-w-3.5 pc-items-center pc-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="pc-h-4 pc-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "focus:text-accent-crema-cream-500 pc-relative pc-flex pc-cursor-default pc-select-none pc-items-center pc-rounded-full pc-border-2 pc-border-transparent pc-py-1.5 pc-pl-8 pc-pr-2 pc-text-sm pc-outline-none pc-transition-colors focus:pc-border-crema-cream-500 data-[disabled]:pc-pointer-events-none data-[disabled]:pc-opacity-50",
      className,
    )}
    {...props}
  >
    <span className="pc-absolute pc-left-2 pc-flex pc-h-3.5 pc-w-3.5 pc-items-center pc-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CircleIcon className="pc-h-2 pc-w-2 pc-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "pc-px-2 pc-py-1.5 pc-text-sm pc-font-semibold",
      inset && "pc-pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-pc-mx-1 pc-my-1 pc-h-px pc-bg-crema-cream-500", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "pc-ml-auto pc-text-xs pc-tracking-widest pc-opacity-60",
        className,
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
