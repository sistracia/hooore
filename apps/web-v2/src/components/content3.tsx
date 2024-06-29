import { cn } from "@repo/utils";

export type Content3Props = {
  header?: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
};

export function Content3({
  className,
  description,
  footer,
  header,
  title,
}: Content3Props) {
  return (
    <div
      className={cn(
        "ss-flex ss-flex-col ss-gap-10 ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20",
        className,
      )}
    >
      {(header || title || description) && (
        <div className="ss-flex ss-flex-col ss-gap-6">
          {header && (
            <div className="ss-flex ss-justify-center sm:ss-justify-start">
              {header}
            </div>
          )}
          {title && (
            <h2 className="ss-text-center ss-text-4xl sm:ss-text-start sm:ss-text-7xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="ss-text-center ss-text-xl sm:ss-text-start sm:ss-text-3xl">
              {description}
            </p>
          )}
        </div>
      )}
      {footer}
    </div>
  );
}
