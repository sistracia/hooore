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
        "comp-relative comp-h-full comp-w-full comp-overflow-hidden",
        className,
      )}
    >
      <ul className="hover:animation-pause comp-flex comp-h-full comp-animate-[marquee-to-left_var(--marquee-animation-duration)_linear_infinite] comp-list-none">
        {Children.map(children, (child, index) => {
          return (
            <li
              key={index}
              className="comp-flex comp-max-h-full comp-w-[var(--marquee-element-width)] comp-shrink-0 comp-items-center comp-justify-center [&>*]:comp-w-full"
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
                className="comp-flex comp-max-h-full comp-w-[var(--marquee-element-width)] comp-shrink-0 comp-items-center comp-justify-center [&>*]:comp-w-full"
              >
                {childrenArray[index % childrenArray.length]}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
