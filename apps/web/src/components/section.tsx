import { Divider } from "@repo/component/divider";
import { cn } from "@repo/utils";
import { Children } from "react";

export type SectionProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  layout?: "vertical" | "horiozontal";
};

export function Section({
  title,
  description,
  extra,
  children,
  layout = "vertical",
  className,
}: SectionProps) {
  const isVertical = layout === "vertical";
  const isHorizontal = layout === "horiozontal";
  const hasChildren = children !== undefined;

  return (
    <section
      className={cn(
        "flex w-full gap-2 overflow-hidden rounded-[2.5rem] sm:rounded-[5rem]",
        isVertical && "flex-col",
        isHorizontal && "flex-col sm:flex-row",
        className,
      )}
    >
      <div
        className={cn(
          "bg-ivory-gading-50 px-6 py-20 sm:px-12",
          hasChildren && "pb-6",
          isHorizontal && "flex flex-col justify-between sm:w-2/4",
        )}
      >
        <h2 className="mb-6 text-3xl text-ink-cumi-500 sm:text-6xl">{title}</h2>
        <p className="text-ink-cumi-200 sm:text-xl">{description}</p>
        {extra && <Divider />}
        {extra && extra}
      </div>
      {children && (
        <div
          className={cn(
            "flex w-full gap-2",
            isVertical && "flex-col sm:flex-row",
            isHorizontal && "flex-col sm:w-2/4",
          )}
        >
          {Children.map(children, (child, index) => {
            return (
              <div key={index} className="h-full bg-ink-cumi-50 p-6 sm:p-12">
                {child}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
