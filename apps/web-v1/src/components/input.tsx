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
          "ss-flex ss-h-14 ss-w-full ss-rounded-full ss-bg-crema-cream-500/25 ss-px-6 ss-py-2 ss-shadow-[inset_0px_0px_0px_2px] ss-shadow-crema-cream-500/25 file:ss-bg-transparent placeholder:ss-text-crema-cream-500/50 disabled:ss-cursor-not-allowed disabled:ss-opacity-50",
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
