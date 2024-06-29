import { cn } from "@repo/utils";

export type Content4Props = {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
};

export function Content4({
  className,
  title,
  description,
  footer,
}: Content4Props) {
  return (
    <div
      className={cn(
        "ss-flex ss-h-full ss-w-full ss-flex-col ss-items-center ss-px-4 ss-py-10 sm:ss-flex-row sm:ss-items-start sm:ss-px-20 sm:ss-py-20",
        className,
      )}
    >
      {title && (
        <h2 className="ss-mb-6 ss-text-3xl sm:ss-mb-0 sm:ss-mr-12 sm:ss-text-5xl">
          {title}
        </h2>
      )}
      <div className="ss-flex ss-h-full ss-w-full ss-flex-col ss-items-center ss-gap-10 ss-pt-0 sm:ss-items-start sm:ss-pt-40">
        {description && (
          <p className="ss-whitespace-pre-line ss-text-center ss-text-xl sm:ss-text-start sm:ss-text-4xl">
            {description}
          </p>
        )}
        {footer}
      </div>
    </div>
  );
}
