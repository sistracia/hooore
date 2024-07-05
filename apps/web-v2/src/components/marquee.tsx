import { cn } from "@repo/utils";
import { Children } from "react";

export type MarqueeProps = {
  className?: string;
  children?: React.ReactNode;
  duration?: number;
};

/**
 * Ref: https://github.com/HoanghoDev/youtube_v2/blob/main/auto_slider/index.html
 */
export function Marquee({ children, className, duration = 10 }: MarqueeProps) {
  return (
    <div
      className={cn(
        "ss-h-[var(--marquee-item-height)] ss-w-full ss-overflow-hidden",
        className,
      )}
      style={
        {
          "--marquee-item-width": "100px",
          "--marquee-item-height": "50px",
          "--marquee-item-quantity": Children.count(children),
          "--marquee-animation-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <div className="ss-group ss-relative ss-flex ss-h-full ss-w-full ss-min-w-[calc(var(--marquee-item-width)*var(--marquee-item-quantity))]">
        {Children.map(children, (child, childIndex) => {
          return (
            <div
              key={childIndex}
              style={
                {
                  animationDelay: `calc((var(--marquee-animation-duration)/var(--marquee-item-quantity))*(${childIndex}))`,
                } as React.CSSProperties
              }
              className="group-hover:animation-pause ss-absolute ss-left-full ss-h-[var(--marquee-item-height)] ss-w-[var(--marquee-item-width)] ss-animate-[marquee-to-left_var(--marquee-animation-duration)_linear_infinite]"
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}
