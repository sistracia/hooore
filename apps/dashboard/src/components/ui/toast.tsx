"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { Cross1Icon } from "@radix-ui/react-icons";

import { cn } from "@repo/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "dd-fixed dd-top-0 dd-z-[100] dd-flex dd-max-h-screen dd-w-full dd-flex-col-reverse dd-p-4 sm:dd-bottom-0 sm:dd-right-0 sm:dd-top-auto sm:dd-flex-col md:dd-max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "dd-group dd-pointer-events-auto dd-relative dd-flex dd-w-full dd-items-center dd-justify-between dd-space-x-4 dd-overflow-hidden dd-rounded-md dd-border dd-p-6 dd-pr-8 dd-shadow-lg dd-transition-all data-[swipe=cancel]:dd-translate-x-0 data-[swipe=end]:dd-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:dd-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:dd-transition-none data-[state=open]:dd-animate-in data-[state=closed]:dd-animate-out data-[swipe=end]:dd-animate-out data-[state=closed]:dd-fade-out-80 data-[state=closed]:dd-slide-out-to-right-full data-[state=open]:dd-slide-in-from-top-full data-[state=open]:sm:dd-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "dd-border dd-bg-background dd-text-foreground",
        destructive:
          "dd-destructive dd-group dd-border-destructive dd-bg-destructive dd-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "dd-inline-flex dd-h-8 dd-shrink-0 dd-items-center dd-justify-center dd-rounded-md dd-border dd-bg-transparent dd-px-3 dd-text-sm dd-font-medium dd-ring-offset-background dd-transition-colors hover:dd-bg-secondary focus:dd-outline-none focus:dd-ring-2 focus:dd-ring-ring focus:dd-ring-offset-2 disabled:dd-pointer-events-none disabled:dd-opacity-50 group-[.destructive]:dd-border-muted/40 group-[.destructive]:hover:dd-border-destructive/30 group-[.destructive]:hover:dd-bg-destructive group-[.destructive]:hover:dd-text-destructive-foreground group-[.destructive]:focus:dd-ring-destructive",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "dd-absolute dd-right-2 dd-top-2 dd-rounded-md dd-p-1 dd-text-foreground/50 dd-opacity-0 dd-transition-opacity hover:dd-text-foreground focus:dd-opacity-100 focus:dd-outline-none focus:dd-ring-2 group-hover:dd-opacity-100 group-[.destructive]:dd-text-red-300 group-[.destructive]:hover:dd-text-red-50 group-[.destructive]:focus:dd-ring-red-400 group-[.destructive]:focus:dd-ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <Cross1Icon className="dd-h-4 dd-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("dd-text-sm dd-font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("dd-text-sm dd-opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
