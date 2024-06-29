import { cn } from "@repo/utils";

export type Content4Props = {
  title?: string;
  description?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
  pushContent?: boolean;
};

export function Content4({
  className,
  title,
  description,
  header,
  footer,
  content,
  pushContent = true,
}: Content4Props) {
  return (
    <div
      className={cn(
        "ss-flex ss-h-full ss-w-full ss-flex-col ss-items-center ss-px-4 ss-py-10 sm:ss-flex-row sm:ss-items-start sm:ss-px-20 sm:ss-py-20",
        className,
      )}
    >
      {(header || title) && (
        <div className="ss-flex ss-flex-col ss-gap-6">
          {header}
          {title && (
            <h2 className="ss-mb-6 ss-text-3xl sm:ss-mb-0 sm:ss-mr-12 sm:ss-text-5xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {(description || content || footer) && (
        <div
          className={cn(
            "ss-flex ss-h-full ss-w-full ss-flex-col ss-items-center ss-gap-10 sm:ss-items-start",
            pushContent && "sm:ss-pt-40",
          )}
        >
          {description && (
            <p className="ss-whitespace-pre-line ss-text-center ss-text-xl sm:ss-text-start sm:ss-text-4xl">
              {description}
            </p>
          )}
          {content}
          {footer}
        </div>
      )}
    </div>
  );
}
