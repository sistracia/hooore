"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "@hooore/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "dd- dd-fixed dd-inset-0 dd-z-50 dd-bg-black/80 data-[state=open]:dd-animate-in data-[state=closed]:dd-animate-out data-[state=closed]:dd-fade-out-0 data-[state=open]:dd-fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "data-[state=closed]:dd-slide-out-to-top-[48%] data-[state=open]:dd-slide-in-from-top-[48%] dd-fixed dd-left-[50%] dd-top-[50%] dd-z-50 dd-grid dd-w-full dd-max-w-lg dd-translate-x-[-50%] dd-translate-y-[-50%] dd-gap-4 dd-border dd-bg-background dd-p-6 dd-shadow-lg dd-duration-200 data-[state=open]:dd-animate-in data-[state=closed]:dd-animate-out data-[state=closed]:dd-fade-out-0 data-[state=open]:dd-fade-in-0 data-[state=closed]:dd-zoom-out-95 data-[state=open]:dd-zoom-in-95 data-[state=closed]:dd-slide-out-to-left-1/2 data-[state=open]:dd-slide-in-from-left-1/2 sm:dd-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="dd-absolute dd-right-4 dd-top-4 dd-rounded-sm dd-opacity-70 dd-ring-offset-background dd-transition-opacity hover:dd-opacity-100 focus:dd-outline-none focus:dd-ring-2 focus:dd-ring-ring focus:dd-ring-offset-2 disabled:dd-pointer-events-none data-[state=open]:dd-bg-accent data-[state=open]:dd-text-muted-foreground">
        <Cross2Icon className="dd-h-4 dd-w-4" />
        <span className="dd-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "dd-flex dd-flex-col dd-space-y-1.5 dd-text-center sm:dd-text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "dd-flex dd-flex-col-reverse sm:dd-flex-row sm:dd-justify-end sm:dd-space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "dd-text-lg dd-font-semibold dd-leading-none dd-tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("dd-text-sm dd-text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

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
};
