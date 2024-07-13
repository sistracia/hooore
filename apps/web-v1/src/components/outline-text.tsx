import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/utils";

export type OutlineTextProps = {
  children?: React.ReactNode;
  outlineColor?: string;
  className?: string;
  asChild?: boolean;
};

export function OutlineText({
  children,
  outlineColor = "black",
  className,
  asChild,
}: OutlineTextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      style={
        {
          "--shadow-color": outlineColor,
          backgroundSize: `100% var(--d, 0)`,
        } as React.CSSProperties
      }
      className={cn(
        // "text-shadow-5 ease-[ease] ss-transition-[text-shadow] ss-duration-1000 [--text-shadow-color:transparent] hover:[--text-shadow-color:var(--shadow-color)]",
        "ss-overflow-hidden ss-bg-[linear-gradient(var(--text-color)_0_0)] ss-bg-bottom ss-bg-no-repeat ss-transition-[background-size] ss-duration-300 hover:ss-text-[rgb(var(--page-background))] hover:[--d:84.5%]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
