import { cn } from "@repo/utils";
import { Children } from "react";

export type MarqueeProps = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Ref: https://codepen.io/ramzibach-the-styleful/pen/LYoYejb
 */
export function Marquee({ children, className }: MarqueeProps) {
  const childrenCount = Children.count(children);

  return (
    <ul
      style={
        {
          "--marquee-duration": "10s",
          "--marquee-item-quantity": childrenCount,
          "--marquee-item-width": "200px",
        } as React.CSSProperties
      }
      className={cn(
        "ss-relative ss-me-auto ss-ms-auto ss-h-full ss-w-full ss-overflow-hidden",
        className,
      )}
    >
      {Children.map(children, (child, childIndex) => {
        return (
          <li
            key={childIndex}
            style={
              {
                "--marquee-item-position": childIndex + 1,
                animationDuration: "var(--marquee-duration)",
                animationDelay:
                  "calc(var(--marquee-duration) / var(--marquee-item-quantity) * (var(--marquee-item-quantity) - var(--marquee-item-position)) * -1)",
              } as React.CSSProperties
            }
            className={cn(
              "ss-absolute ss-left-[max(calc(var(--marquee-item-width)*var(--marquee-item-quantity)),100%)] ss-h-full ss-w-[var(--marquee-item-width)]",
              "ss-animate-[scroll-left] ss-ease-linear ss-repeat-infinite",
            )}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
}
