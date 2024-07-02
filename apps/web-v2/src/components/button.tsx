import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@repo/utils";

const buttonVariants = cva(
  "ss-inline-flex ss-items-center ss-gap-2 ss-whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "ss-p-2",
        cta: "ss-px-16 ss-rounded-full ss-bg-yellow-pisangambon-500 ss-py-4 ss-text-xl ss-font-medium ss-text-black-mamba-500 ss-shadow-[inset_0px_0px_0px_3px] ss-shadow-black-mamba-500/25 sm:ss-px-16 sm:ss-py-4 sm:ss-text-2xl",
        outline:
          "ss-rounded-full ss-border-2 ss-border-crema-cream-500 ss-px-4 ss-py-2",
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
