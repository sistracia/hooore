'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@hooore/utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'data-[state=open]:editor-animate-in data-[state=closed]:editor-animate-out data-[state=closed]:editor-fade-out-0 data-[state=open]:editor-fade-in-0 editor-fixed editor-inset-0 editor-z-50 editor-bg-black/80',
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'editor-bg-background data-[state=open]:editor-animate-in data-[state=closed]:editor-animate-out data-[state=closed]:editor-fade-out-0 data-[state=open]:editor-fade-in-0 data-[state=closed]:editor-zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:editor-slide-out-to-left-1/2 data-[state=closed]:editor-slide-out-to-top-[48%] data-[state=open]:editor-slide-in-from-left-1/2 data-[state=open]:editor-slide-in-from-top-[48%] editor-fixed editor-left-[50%] editor-top-[50%] editor-z-50 editor-grid editor-w-full editor-max-w-lg editor-translate-x-[-50%] editor-translate-y-[-50%] editor-gap-4 editor-border editor-p-6 editor-shadow-lg editor-duration-200 editor-sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="editor-ring-offset-background focus:editor-ring-ring data-[state=open]:editor-bg-accent data-[state=open]:editor-text-muted-foreground editor-absolute editor-right-4 editor-top-4 editor-rounded-sm editor-opacity-70 editor-transition-opacity hover:editor-opacity-100 focus:editor-outline-none focus:editor-ring-2 focus:editor-ring-offset-2 disabled:editor-pointer-events-none">
        <X className="editor-h-4 editor-w-4" />
        <span className="editor-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'editor-flex editor-flex-col editor-space-y-1.5 editor-text-center sm:editor-text-left',
      className,
    )}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'editor-flex editor-flex-col-reverse sm:editor-flex-row sm:editor-justify-end sm:editor-space-x-2',
      className,
    )}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'editor-text-lg editor-font-semibold editor-leading-none editor-tracking-tight',
      className,
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('editor-text-muted-foreground editor-text-sm', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
