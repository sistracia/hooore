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
      "ss-flex ss-cursor-default ss-select-none ss-items-center ss-rounded-full ss-border-2 ss-border-transparent ss-px-2 ss-py-1.5 ss-text-sm ss-outline-none focus:ss-border-crema-cream-500 data-[state=open]:ss-border-crema-cream-500",
      inset && "ss-pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ss-ml-auto ss-h-4 ss-w-4" />
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
      "ss-z-50 ss-min-w-[8rem] ss-overflow-hidden ss-rounded-md ss-bg-black-mamba-400 ss-p-1 ss-shadow-lg data-[state=open]:ss-animate-in data-[state=closed]:ss-animate-out data-[state=closed]:ss-fade-out-0 data-[state=open]:ss-fade-in-0 data-[state=closed]:ss-zoom-out-95 data-[state=open]:ss-zoom-in-95 data-[side=bottom]:ss-slide-in-from-top-2 data-[side=left]:ss-slide-in-from-right-2 data-[side=right]:ss-slide-in-from-left-2 data-[side=top]:ss-slide-in-from-bottom-2",
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
        "ss-z-50 ss-min-w-[8rem] ss-overflow-hidden ss-rounded-md ss-bg-black-mamba-400 ss-p-1 ss-shadow-md data-[state=open]:ss-animate-in data-[state=closed]:ss-animate-out data-[state=closed]:ss-fade-out-0 data-[state=open]:ss-fade-in-0 data-[state=closed]:ss-zoom-out-95 data-[state=open]:ss-zoom-in-95 data-[side=bottom]:ss-slide-in-from-top-2 data-[side=left]:ss-slide-in-from-right-2 data-[side=right]:ss-slide-in-from-left-2 data-[side=top]:ss-slide-in-from-bottom-2",
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
      "focus:text-accent-crema-cream-500 ss-relative ss-flex ss-cursor-default ss-select-none ss-items-center ss-rounded-full ss-border-2 ss-border-transparent ss-px-2 ss-py-1.5 ss-text-sm ss-outline-none ss-transition-colors focus:ss-border-crema-cream-500 data-[disabled]:ss-pointer-events-none data-[disabled]:ss-opacity-50",
      inset && "ss-pl-8",
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
      "focus:text-accent-crema-cream-500 ss-relative ss-flex ss-cursor-default ss-select-none ss-items-center ss-rounded-full ss-border-2 ss-border-transparent ss-py-1.5 ss-pl-8 ss-pr-2 ss-text-sm ss-outline-none ss-transition-colors focus:ss-border-crema-cream-500 data-[disabled]:ss-pointer-events-none data-[disabled]:ss-opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="ss-absolute ss-left-2 ss-flex ss-h-3.5 ss-w-3.5 ss-items-center ss-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="ss-h-4 ss-w-4" />
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
      "focus:text-accent-crema-cream-500 ss-relative ss-flex ss-cursor-default ss-select-none ss-items-center ss-rounded-full ss-border-2 ss-border-transparent ss-py-1.5 ss-pl-8 ss-pr-2 ss-text-sm ss-outline-none ss-transition-colors focus:ss-border-crema-cream-500 data-[disabled]:ss-pointer-events-none data-[disabled]:ss-opacity-50",
      className,
    )}
    {...props}
  >
    <span className="ss-absolute ss-left-2 ss-flex ss-h-3.5 ss-w-3.5 ss-items-center ss-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CircleIcon className="ss-h-2 ss-w-2 ss-fill-current" />
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
      "ss-px-2 ss-py-1.5 ss-text-sm ss-font-semibold",
      inset && "ss-pl-8",
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
    className={cn("-ss-mx-1 ss-my-1 ss-h-px ss-bg-crema-cream-500", className)}
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
        "ss-ml-auto ss-text-xs ss-tracking-widest ss-opacity-60",
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
