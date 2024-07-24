import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/utils";

const badgeVariants = cva(
  "dd-inline-flex dd-items-center dd-rounded-full dd-border dd-px-2.5 dd-py-0.5 dd-text-xs dd-font-semibold dd-transition-colors focus:dd-outline-none focus:dd-ring-2 focus:dd-ring-ring focus:dd-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "dd-border-transparent dd-bg-primary dd-text-primary-foreground hover:dd-bg-primary/80",
        secondary:
          "dd-border-transparent dd-bg-secondary dd-text-secondary-foreground hover:dd-bg-secondary/80",
        destructive:
          "dd-border-transparent dd-bg-destructive dd-text-destructive-foreground hover:dd-bg-destructive/80",
        outline: "dd-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
