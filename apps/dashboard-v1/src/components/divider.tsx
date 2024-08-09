import { cn } from "@repo/utils";

export type DividerProps = {
  className?: string;
};

export function Divider({ className }: DividerProps) {
  return (
    <div className={cn("dd-my-6 dd-h-[2px] dd-border-t-2", className)}></div>
  );
}
