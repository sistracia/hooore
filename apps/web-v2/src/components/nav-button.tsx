import { cn } from "@repo/utils";
import { Button } from "./button";

export type NavButtonProps = {
  href: string;
  pathname?: string;
  startWith?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export function NavButton({
  pathname,
  href,
  startWith = false,
  children,
  className,
}: NavButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "ss-justify-start ss-rounded-full ss-border-2",
        (startWith && pathname?.startsWith(href)) || pathname === href
          ? "ss-border-transparent ss-bg-crema-cream-500/25 sm:ss-border-crema-cream-500 sm:ss-bg-transparent"
          : "ss-border-transparent",
        className,
      )}
    >
      {children}
    </Button>
  );
}
