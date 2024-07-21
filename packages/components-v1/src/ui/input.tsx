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
          "pc-flex pc-h-14 pc-w-full pc-rounded-full pc-bg-crema-cream-500/25 pc-px-6 pc-py-2 pc-shadow-[inset_0px_0px_0px_2px] pc-shadow-crema-cream-500/25 file:pc-bg-transparent placeholder:pc-text-crema-cream-500/50 disabled:pc-cursor-not-allowed disabled:pc-opacity-50",
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
