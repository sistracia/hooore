import { cn } from "@repo/utils";

export type Content2Item = {
  title?: string;
  description?: string;
};

export type Content2Props = {
  number?: number;
  title?: string;
  items?: Content2Item[];
  className?: string;
};

export function Content2({ items, number, title, className }: Content2Props) {
  return (
    <div
      className={cn(
        "pc-flex pc-flex-col pc-gap-6 pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-gap-12 sm:pc-px-20 sm:pc-py-20",
        className,
      )}
    >
      {number && (
        <span className="pc-w-full pc-flex-1 pc-text-h1 sm:pc-w-1/4 sm:pc-text-h1-sm">
          {number}
        </span>
      )}
      {title && (
        <h2
          className={cn(
            "pc-text-balance pc-text-h2",
            items
              ? "pc-w-full pc-flex-1 sm:pc-w-1/4"
              : "pc-flex-2 pc-w-full sm:pc-w-3/4",
          )}
        >
          {title}
        </h2>
      )}
      {items && (
        <div className="pc-flex-2 pc-grid pc-w-full pc-grid-cols-1 pc-gap-6 sm:pc-w-2/4 sm:pc-grid-cols-2 sm:pc-gap-12">
          {items.map((item, itemIndex) => {
            return (
              <div key={itemIndex}>
                <h3 className="pc-mb-1 pc-text-balance pc-text-h4 pc-font-semibold sm:pc-mb-2 sm:pc-text-h4-sm">
                  {item.title}
                </h3>
                <p className="pc-text-p sm:pc-text-note">{item.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
