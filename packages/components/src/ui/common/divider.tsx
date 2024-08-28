import { cn } from "@repo/utils";

export type DividerProps = {
  subtle?: boolean;
  height?: number;
  className?: string;
};
export function Divider({
  height = 2,
  subtle = false,
  className,
}: DividerProps) {
  return (
    <span
      style={{ height: subtle ? "1px" : `${height}px` }}
      className={cn(
        "pc-block pc-w-full",
        subtle
          ? "pc-bg-[rgb(var(--foreground))]/50"
          : "pc-bg-[rgb(var(--foreground))]",
        className,
      )}
    ></span>
  );
}
