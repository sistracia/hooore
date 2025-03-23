import * as React from "react";

import { cn } from "@hooore/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "dd-flex dd-min-h-[80px] dd-w-full dd-rounded-md dd-border dd-border-input dd-bg-background dd-px-3 dd-py-2 dd-text-sm dd-ring-offset-background placeholder:dd-text-muted-foreground focus-visible:dd-outline-none focus-visible:dd-ring-2 focus-visible:dd-ring-ring focus-visible:dd-ring-offset-2 disabled:dd-cursor-not-allowed disabled:dd-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
