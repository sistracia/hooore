'use client'

import type { DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'

import { cn } from '@hooore/utils'
import { Dialog, DialogContent } from './dialog'
import Magic from './icons/magic'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'editor-bg-popover editor-text-popover-foreground editor-flex editor-h-full editor-w-full editor-flex-col editor-overflow-hidden editor-rounded-md',
      className,
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="editor-overflow-hidden editor-p-0 editor-shadow-lg">
        <Command className="editor-[&_[cmdk-group-heading]]:editor-text-muted-foreground editor-[&_[cmdk-group-heading]]:editor-px-2 editor-[&_[cmdk-group-heading]]:editor-font-medium editor-[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:editor-pt-0 editor-[&_[cmdk-group]]:editor-px-2 editor-[&_[cmdk-input-wrapper]_svg]:editor-h-5 editor-[&_[cmdk-input-wrapper]_svg]:editor-w-5 editor-[&_[cmdk-input]]:editor-h-12 editor-[&_[cmdk-item]]:editor-px-2 editor-[&_[cmdk-item]]:editor-py-3 editor-[&_[cmdk-item]_svg]:editor-h-5 editor-[&_[cmdk-item]_svg]:editor-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="editor-flex editor-items-center editor-border-b editor-px-4"
    cmdk-input-wrapper=""
  >
    <Magic className="editor-mr-2 editor-h-4 editor-w-4 editor-shrink-0 editor-text-purple-500" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'placeholder:editor-text-muted-foreground editor-flex editor-h-11 editor-w-full editor-rounded-md editor-bg-transparent editor-py-3 editor-text-sm editor-outline-none disabled:editor-cursor-not-allowed disabled:editor-opacity-50',
        className,
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'editor-max-h-[300px] editor-overflow-y-auto editor-overflow-x-hidden',
      className,
    )}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="editor-py-6 editor-text-center editor-text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'editor-text-foreground [&_[cmdk-group-heading]]:editor-text-muted-foreground editor-overflow-hidden editor-p-1 [&_[cmdk-group-heading]]:editor-px-2 [&_[cmdk-group-heading]]:editor-py-1.5 [&_[cmdk-group-heading]]:editor-text-xs [&_[cmdk-group-heading]]:editor-font-medium',
      className,
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('editor-bg-border -editor-mx-1 editor-h-px', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'aria-selected:editor-bg-accent aria-selected:editor-text-accent-foreground editor-relative editor-flex editor-cursor-default editor-select-none editor-items-center editor-rounded-sm editor-px-2 editor-py-1.5 editor-text-sm editor-outline-none data-[disabled]:editor-pointer-events-none data-[disabled]:editor-opacity-50',
      className,
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'editor-text-muted-foreground editor-ml-auto editor-text-xs editor-tracking-widest',
        className,
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

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
}
