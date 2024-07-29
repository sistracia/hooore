import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/utils";

const buttonVariants = cva(
  "dd-inline-flex dd-items-center dd-whitespace-nowrap dd-rounded-md dd-text-sm dd-ring-offset-background dd-transition-colors focus-visible:dd-outline-none focus-visible:dd-ring-2 focus-visible:dd-ring-ring focus-visible:dd-ring-offset-2 disabled:dd-pointer-events-none disabled:dd-opacity-50",
  {
    variants: {
      variant: {
        default:
          "dd-bg-primary dd-text-primary-foreground hover:dd-bg-primary/90",
        destructive:
          "dd-bg-destructive dd-text-destructive-foreground hover:dd-bg-destructive/90",
        outline:
          "dd-border dd-border-input dd-bg-background hover:dd-bg-accent hover:dd-text-accent-foreground",
        secondary:
          "dd-bg-secondary dd-text-secondary-foreground hover:dd-bg-secondary/80",
        ghost: "hover:dd-bg-accent hover:dd-text-accent-foreground",
        link: "dd-text-primary dd-underline-offset-4 hover:dd-underline",
      },
      size: {
        default: "dd-h-10 dd-px-4 dd-py-2",
        sm: "dd-h-9 dd-rounded-md dd-px-3",
        lg: "dd-h-11 dd-rounded-md dd-px-8",
        icon: "dd-h-10 dd-w-10",
        "icon-xs": "dd-h-5 dd-w-5",
        "icon-sm": "dd-h-7 dd-w-7",
      },
      justify: {
        default: "dd-justify-center",
        start: "dd-justify-start",
        end: "dd-justify-end",
      },
      font: {
        default: "dd-font-medium",
        normal: "dd-font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      justify: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, justify, font, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, justify, font }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
