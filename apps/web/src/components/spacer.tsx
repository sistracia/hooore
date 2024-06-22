import { cn } from "@repo/utils";

export type SpacerProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Spacer({ className, children }: SpacerProps) {
  return <div className={cn("mx-2 w-full sm:mx-8", className)}>{children}</div>;
}
