import * as React from "react";

import { cn } from "@repo/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "dd-flex dd-h-10 dd-w-full dd-rounded-md dd-border dd-border-input dd-bg-background dd-px-3 dd-py-2 dd-text-sm dd-ring-offset-background file:dd-border-0 file:dd-bg-transparent file:dd-text-sm file:dd-font-medium placeholder:dd-text-muted-foreground focus-visible:dd-outline-none focus-visible:dd-ring-2 focus-visible:dd-ring-ring focus-visible:dd-ring-offset-2 disabled:dd-cursor-not-allowed disabled:dd-opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
