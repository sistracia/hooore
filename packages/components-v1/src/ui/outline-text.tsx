import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/utils";

export type OutlineTextProps = {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

export function OutlineText({
  children,
  className,
  asChild,
}: OutlineTextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(
        "pc-bg-[linear-gradient(var(--text-color)_0_0)] pc-bg-[length:100%_var(--d,0)] pc-bg-bottom pc-bg-no-repeat pc-transition-[background-size] pc-duration-300 hover:pc-text-[rgb(var(--page-background))] hover:[--d:100%]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
