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
        "ss-bg-[linear-gradient(var(--text-color)_0_0)] ss-bg-[length:100%_var(--d,0)] ss-bg-bottom ss-bg-no-repeat ss-transition-[background-size] ss-duration-300 hover:ss-text-[rgb(var(--page-background))] hover:[--d:84.5%]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
