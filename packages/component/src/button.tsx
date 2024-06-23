import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/utils";

const buttonVariants = cva(
  "comp-inline-flex comp-items-center comp-whitespace-nowrap comp-rounded-full comp-text-sm comp-font-medium comp-transition-colors disabled:comp-pointer-events-none disabled:comp-opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "comp-bg-primary comp-text-ink-cumi-500 comp-border-2 comp-border-yellow-pisangambon-600 hover:comp-bg-yellow-pisangambon-700 hover:comp-border-yellow-pisangambon-800 active:comp-bg-yellow-pisangambon-800 active:comp-border-yellow-pisangambon-900 comp-shadow-[0_8px_16px_0_rgba(26,24,54,0.12)]",
        text: "comp-text-ink-cumi-500",
      },
      size: {
        default: "comp-h-9 comp-px-5 comp-py-5",
        sm: "comp-h-8 comp-px-3 comp-text-xs",
        lg: "comp-h-10 comp-px-8",
        icon: "comp-h-9 comp-w-9",
      },
      justify: {
        default: "comp-justify-center",
        start: "comp-justify-start",
        between: "comp-justify-between",
        end: "comp-justify-end",
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
  ({ className, variant, size, justify, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, justify, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
