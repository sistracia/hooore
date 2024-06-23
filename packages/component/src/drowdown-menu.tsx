"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@repo/utils";
import { Button } from "./button";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ variant = "text", className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Trigger asChild>
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          "data-[state=open]:comp-bg-ivory-gading-300 [&>svg:last-of-type]:data-[state=open]:comp-rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="comp-ml-1 comp-h-4 comp-w-4" />
      </Button>
    </DropdownMenuPrimitive.Trigger>
  );
});

DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

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
      "focus:comp-bg-accent data-[state=open]:comp-bg-accent comp-flex comp-cursor-default comp-select-none comp-items-center comp-rounded-sm comp-px-2 comp-py-1.5 comp-text-sm comp-outline-none",
      inset && "comp-pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="comp-ml-auto comp-h-4 comp-w-4" />
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
      "comp-bg-popover comp-text-popover-foreground data-[side=left]comp-:slide-in-from-right-2 comp-z-50 comp-min-w-[8rem] comp-overflow-hidden comp-rounded-md comp-border comp-p-1 comp-shadow-lg data-[state=open]:comp-animate-in data-[state=closed]:comp-animate-out data-[state=closed]:comp-fade-out-0 data-[state=open]:comp-fade-in-0 data-[state=closed]:comp-zoom-out-95 data-[state=open]:comp-zoom-in-95 data-[side=bottom]:comp-slide-in-from-top-2 data-[side=right]:comp-slide-in-from-left-2 data-[side=top]:comp-slide-in-from-bottom-2",
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
>(
  (
    { className, sideOffset = 4, side = "bottom", align = "start", ...props },
    ref,
  ) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        side={side}
        align={align}
        className={cn(
          "comp-text-ink-cumi500 comp-z-50 comp-min-w-[8rem] comp-overflow-hidden comp-rounded-md comp-border comp-bg-ivory-gading-50 comp-p-1 comp-shadow-md",
          "data-[state=open]:comp-animate-in data-[state=closed]:comp-animate-out data-[state=closed]:comp-fade-out-0 data-[state=open]:comp-fade-in-0 data-[state=closed]:comp-zoom-out-95 data-[state=open]:comp-zoom-in-95 data-[side=bottom]:comp-slide-in-from-top-2 data-[side=left]:comp-slide-in-from-right-2 data-[side=right]:comp-slide-in-from-left-2 data-[side=top]:comp-slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  ),
);
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
      "focus:comp-bg-accent focus:comp-text-accent-foreground comp-relative comp-flex comp-cursor-default comp-select-none comp-items-center comp-rounded-sm comp-px-2 comp-py-1.5 comp-text-sm comp-outline-none comp-transition-colors data-[disabled]:comp-pointer-events-none data-[disabled]:comp-opacity-50",
      inset && "comp-pl-8",
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
      "focus:comp-bg-accent focus:comp-text-accent-foreground comp-relative comp-flex comp-cursor-default comp-select-none comp-items-center comp-rounded-sm comp-py-1.5 comp-pl-8 comp-pr-2 comp-text-sm comp-outline-none comp-transition-colors data-[disabled]:comp-pointer-events-none data-[disabled]:comp-opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="comp-absolute comp-left-2 comp-flex comp-h-3.5 comp-w-3.5 comp-items-center comp-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="comp-h-4 comp-w-4" />
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
      "focus:comp-bg-accent focus:comp-text-accent-foreground comp-relative comp-flex comp-cursor-default comp-select-none comp-items-center comp-rounded-sm comp-py-1.5 comp-pl-8 comp-pr-2 comp-text-sm comp-outline-none comp-transition-colors data-[disabled]:comp-pointer-events-none data-[disabled]:comp-opacity-50",
      className,
    )}
    {...props}
  >
    <span className="comp-absolute comp-left-2 comp-flex comp-h-3.5 comp-w-3.5 comp-items-center comp-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="comp-h-4 comp-w-4 comp-fill-current" />
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
      "comp-px-2 comp-py-1.5 comp-text-sm comp-font-semibold",
      inset && "comp-pl-8",
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
    className={cn("comp-bg-muted -comp-mx-1 comp-my-1 comp-h-px", className)}
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
        "comp-ml-auto comp-text-xs comp-tracking-widest comp-opacity-60",
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
