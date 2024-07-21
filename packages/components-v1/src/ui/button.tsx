import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@repo/utils";

const buttonVariants = cva(
  "pc-inline-flex pc-items-center pc-gap-2 pc-whitespace-nowrap pc-rounded-full disabled:pc-cursor-not-allowed disabled:pc-opacity-50",
  {
    variants: {
      variant: {
        default: "pc-p-2 hover:pc-backdrop-brightness-0 ",
        cta: "pc-bg-yellow-pisangambon-500 pc-px-16 pc-py-4 pc-text-cta pc-font-medium pc-text-black-mamba-500 pc-shadow-[inset_0px_0px_0px_3px] pc-shadow-black-mamba-500/25 sm:pc-px-16 sm:pc-py-4 sm:pc-text-2xl",
        outline:
          "pc-border-2 pc-border-crema-cream-500 pc-px-4 pc-py-2 hover:pc-backdrop-brightness-0 ",
        link: "pc-p-2 pc-rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
