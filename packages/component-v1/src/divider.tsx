import { cn } from "@repo/utils";

export type DividerProps = {
  className?: string;
  type?: "horizontal" | "vertical";
};

export function Divider({ type = "horizontal", className }: DividerProps) {
  const isVertical = type === "vertical";
  const isHorizontal = type === "horizontal";

  return (
    <span
      className={cn(
        "comp-block comp-bg-ink-cumi-100",
        isHorizontal && "comp-my-10 comp-h-[2px] comp-w-full",
        isVertical && "comp-mx-10 comp-h-full comp-w-[2px]",
        className,
      )}
    ></span>
  );
}
