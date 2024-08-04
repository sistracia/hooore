import { cn } from "@repo/utils";
import { Button } from "../../ui/button";

export type NavButtonProps = {
  isActive?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export function NavButton({ isActive, children, className }: NavButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "pc-justify-start pc-rounded-full pc-border-2",
        isActive
          ? "pc-border-transparent pc-bg-crema-cream-500/25 sm:pc-border-crema-cream-500 sm:pc-bg-transparent"
          : "pc-border-transparent",
        className,
      )}
    >
      {children}
    </Button>
  );
}
