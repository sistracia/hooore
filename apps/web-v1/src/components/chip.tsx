import { cn } from "@repo/utils";

export type ChipProps = {
  children?: React.ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <span
      className={cn(
        "ss-w-fit ss-rounded-full ss-border-2 ss-border-crema-cream-500 ss-px-4 ss-py-1 ss-text-chip",
        "ss-bg-[linear-gradient(var(--text-color)_0_0)] ss-bg-[length:100%_var(--d,0)] ss-bg-bottom ss-bg-no-repeat ss-transition-[background-size] ss-duration-300 hover:ss-text-[rgb(var(--page-background))] hover:[--d:100%]",
      )}
    >
      {children}
    </span>
  );
}
