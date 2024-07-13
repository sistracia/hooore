import { cn } from "@repo/utils";

export type Content4Props = {
  title?: string;
  subtitle?: string;
  splitEvenly?: boolean;
  description?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
  pushContent?: boolean;
  align?: "left" | "center" | "right";
};

export function Content4({
  className,
  title,
  subtitle,
  description,
  header,
  footer,
  content,
  pushContent = true,
  splitEvenly = false,
  align = "center",
}: Content4Props) {
  return (
    <section
      className={cn(
        "ss-flex ss-h-full ss-w-full ss-flex-col ss-items-center ss-px-4 ss-py-10 sm:ss-flex-row sm:ss-items-start sm:ss-px-20 sm:ss-py-20",
        className,
      )}
    >
      {(header || title || subtitle) && (
        <div
          className={cn(
            "ss-flex ss-w-full ss-flex-col ss-gap-6 sm:ss-mr-12 sm:ss-w-fit",
            splitEvenly && "ss-flex-1 sm:ss-w-2/4",
          )}
        >
          {header}
          {title && (
            <h2
              className={cn(
                "ss-whitespace-pre-line ss-text-balance ss-text-h2 sm:ss-text-left sm:ss-text-h2-sm",
                !subtitle && "ss-mb-6 sm:ss-mb-0",
                align === "center" && "ss-text-center",
                align === "left" && "ss-text-left",
                align === "right" && "ss-text-right",
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <span className="ss-mb-6 ss-text-center ss-text-note sm:ss-mb-0 sm:ss-text-left">
              {subtitle}
            </span>
          )}
        </div>
      )}
      {(description || content || footer) && (
        <div
          className={cn(
            "ss-flex ss-h-full ss-flex-col ss-items-center ss-gap-10 sm:ss-items-start",
            pushContent && "sm:ss-pt-40",
            splitEvenly ? "ss-w-full ss-flex-1 sm:ss-w-2/4" : "ss-w-full",
          )}
        >
          {description && (
            <p className="ss-whitespace-pre-line ss-text-balance ss-text-center ss-text-cta sm:ss-text-start sm:ss-text-cta-sm">
              {description}
            </p>
          )}
          {content}
          {footer}
        </div>
      )}
    </section>
  );
}
