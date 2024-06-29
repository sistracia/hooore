import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "@repo/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "ss-relative ss-z-10 ss-flex ss-max-w-max ss-flex-1 ss-items-center ss-justify-center",
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "ss-group ss-flex ss-flex-1 ss-list-none ss-items-center ss-justify-center ss-space-x-1",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "ss-group ss-inline-flex ss-w-max ss-items-center ss-justify-center ss-p-2 ss-transition-colors ss-rounded-full  hover:ss-text-accent-crema-cream-500  focus:ss-text-accent-crema-cream-500 focus:ss-outline-none disabled:ss-pointer-events-none disabled:ss-opacity-50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "ss-group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon
      className="ss-relative ss-top-[1px] ss-ml-1 ss-h-4 ss-w-4 ss-transition ss-duration-300 group-data-[state=open]:ss-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "ss-left-0 ss-top-0 ss-w-full data-[motion^=from-]:ss-animate-in data-[motion^=to-]:ss-animate-out data-[motion^=from-]:ss-fade-in data-[motion^=to-]:ss-fade-out data-[motion=from-end]:ss-slide-in-from-right-52 data-[motion=from-start]:ss-slide-in-from-left-52 data-[motion=to-end]:ss-slide-out-to-right-52 data-[motion=to-start]:ss-slide-out-to-left-52 md:ss-absolute md:ss-w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "ss-absolute ss-left-0 ss-top-full ss-flex ss-justify-center",
    )}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "ss-origin-top-center ss-relative ss-mt-1.5 ss-h-[var(--radix-navigation-menu-viewport-height)] ss-w-full ss-overflow-hidden ss-rounded-md ss-bg-black-mamba-400 ss-text-crema-cream-500 ss-shadow data-[state=open]:ss-animate-in data-[state=closed]:ss-animate-out data-[state=closed]:ss-zoom-out-95 data-[state=open]:ss-zoom-in-90 md:ss-w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "ss-top-full ss-z-[1] ss-flex ss-h-1.5 ss-items-end ss-justify-center ss-overflow-hidden data-[state=visible]:ss-animate-in data-[state=hidden]:ss-animate-out data-[state=hidden]:ss-fade-out data-[state=visible]:ss-fade-in",
      className,
    )}
    {...props}
  >
    <div className="ss-relative ss-top-[60%] ss-h-2 ss-w-2 ss-rotate-45 ss-rounded-tl-sm ss-bg-crema-cream-500 ss-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
