import { cn } from "@repo/utils";
import { Children } from "react";

export type MarqueeProps = {
  className?: string;
  children?: React.ReactNode[] | React.ReactNode;
  duration?: number;
  display?: number;
};

/**
 * Ref: https://www.smashingmagazine.com/2024/04/infinite-scrolling-logos-html-css/
 */
export function Marquee({
  children,
  className,
  duration = 2,
  display = 5,
}: MarqueeProps) {
  const childrenArray = Children.toArray(children);

  return (
    <div
      style={
        {
          "--marquee-elements": Children.count(children),
          "--marquee-elements-displayed": display,
          "--marquee-element-width": `calc(100% / var(--marquee-elements-displayed))`,
          "--marquee-animation-duration": `calc(var(--marquee-elements) * ${duration}s)`,
        } as React.CSSProperties
      }
      className={cn(
        "ss-relative ss-h-full ss-w-full ss-overflow-hidden",
        className,
      )}
    >
      <ul className="hover:animation-pause ss-flex ss-h-full ss-animate-[marquee-to-left_var(--marquee-animation-duration)_linear_infinite] ss-list-none">
        {Children.map(children, (child, index) => {
          return (
            <li
              key={index}
              className="ss-flex ss-max-h-full ss-w-[var(--marquee-element-width)] ss-shrink-0 ss-items-center ss-justify-center [&>*]:ss-w-full"
            >
              {child}
            </li>
          );
        })}
        {Array(display)
          .fill(0)
          .map((_, index) => {
            return (
              <li
                key={index}
                className="ss-flex ss-max-h-full ss-w-[var(--marquee-element-width)] ss-shrink-0 ss-items-center ss-justify-center [&>*]:ss-w-full"
              >
                {childrenArray[index % childrenArray.length]}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
