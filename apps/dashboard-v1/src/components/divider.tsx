import { cn } from "@repo/utils";

export type DividerProps = {
  className?: string;
  withBorder?: boolean;
};

export function Divider({ className, withBorder = true }: DividerProps) {
  return (
    <div
      className={cn(
        "dd-h-[2px]",
        withBorder ? "dd-my-6 dd-border-t-2" : "dd-my-2",
        className,
      )}
    ></div>
  );
}
