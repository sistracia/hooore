import { cn } from "@repo/utils";

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
        "flex w-full overflow-hidden rounded-[2.5rem] sm:rounded-[5rem]",
        isVertical && "flex-col",
        isHorizontal && "flex-col sm:flex-row",
        className,
      )}
    >
      <div
        className={cn(
          "bg-ivory-gading-50 px-6 py-20 sm:px-12",
          hasChildren && "pb-6",
          isVertical && "mb-2",
          isHorizontal && "mr-2 flex flex-1 flex-col justify-between",
        )}
      >
        <h2 className="mb-6 text-3xl text-ink-cumi-500 sm:text-6xl">{title}</h2>
        <p className="text-ink-cumi-200 sm:text-xl">{description}</p>
        {extra && extra}
      </div>
      {children && (
        <div
          className={cn(
            "flex flex-col bg-ink-cumi-50 p-6 sm:flex-row sm:p-12",
            isHorizontal && "flex-1",
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
