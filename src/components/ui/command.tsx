"use client";

import { type DialogProps } from "@radix-ui/react-dialog";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@hooore/utils";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "dd-flex dd-h-full dd-w-full dd-flex-col dd-overflow-hidden dd-rounded-md dd-bg-popover dd-text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="dd-overflow-hidden dd-p-0 dd-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:dd-px-2 [&_[cmdk-group-heading]]:dd-font-medium [&_[cmdk-group-heading]]:dd-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:dd-pt-0 [&_[cmdk-group]]:dd-px-2 [&_[cmdk-input-wrapper]_svg]:dd-h-5 [&_[cmdk-input-wrapper]_svg]:dd-w-5 [&_[cmdk-input]]:dd-h-12 [&_[cmdk-item]]:dd-px-2 [&_[cmdk-item]]:dd-py-3 [&_[cmdk-item]_svg]:dd-h-5 [&_[cmdk-item]_svg]:dd-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="dd-flex dd-items-center dd-border-b dd-px-3"
    // eslint-disable-next-line react/no-unknown-property
    cmdk-input-wrapper=""
  >
    <MagnifyingGlassIcon className="dd-mr-2 dd-h-4 dd-w-4 dd-shrink-0 dd-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "dd-flex dd-h-11 dd-w-full dd-rounded-md dd-bg-transparent dd-py-3 dd-text-sm dd-outline-none placeholder:dd-text-muted-foreground disabled:dd-cursor-not-allowed disabled:dd-opacity-50",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "dd-max-h-[300px] dd-overflow-y-auto dd-overflow-x-hidden",
      className
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="dd-py-6 dd-text-center dd-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "dd-overflow-hidden dd-p-1 dd-text-foreground [&_[cmdk-group-heading]]:dd-px-2 [&_[cmdk-group-heading]]:dd-py-1.5 [&_[cmdk-group-heading]]:dd-text-xs [&_[cmdk-group-heading]]:dd-font-medium [&_[cmdk-group-heading]]:dd-text-muted-foreground",
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("dd--mx-1 dd-h-px dd-bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "dd-relative dd-flex dd-cursor-default dd-select-none dd-items-center dd-rounded-sm dd-px-2 dd-py-1.5 dd-text-sm dd-outline-none data-[disabled=true]:dd-pointer-events-none data-[selected='true']:dd-bg-accent data-[selected=true]:dd-text-accent-foreground data-[disabled=true]:dd-opacity-50",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "dd-ml-auto dd-text-xs dd-tracking-widest dd-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
