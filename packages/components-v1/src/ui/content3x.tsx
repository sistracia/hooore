import { cn } from "@repo/utils";

export type Content3XProps = {
  header?: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
};

export function Content3X({
  className,
  description,
  footer,
  header,
  title,
}: Content3XProps) {
  return (
    <section
      className={cn(
        "pc-flex pc-flex-col pc-gap-10 pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20",
        className,
      )}
    >
      {(header || title || description) && (
        <div className="pc-flex pc-flex-col pc-gap-6">
          {header && (
            <div className="pc-flex pc-justify-center pc-gap-1 sm:pc-justify-start">
              {header}
            </div>
          )}
          {title && (
            <h2 className="pc-text-balance pc-text-center pc-text-h1 sm:pc-text-start sm:pc-text-h1-sm">
              {title}
            </h2>
          )}
          {description && (
            <p className="pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm">
              {description}
            </p>
          )}
        </div>
      )}
      {footer}
    </section>
  );
}
