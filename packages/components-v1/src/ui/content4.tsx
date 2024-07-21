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
        "pc-flex pc-h-full pc-w-full pc-flex-col pc-items-center pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-items-start sm:pc-px-20 sm:pc-py-20",
        className,
      )}
    >
      {(header || title || subtitle) && (
        <div
          className={cn(
            "pc-flex pc-w-full pc-flex-col pc-gap-6 sm:pc-mr-12 sm:pc-w-fit",
            splitEvenly && "pc-flex-1 sm:pc-w-2/4",
          )}
        >
          {header}
          {title && (
            <h2
              className={cn(
                "pc-whitespace-pre-line pc-text-balance pc-text-h2 sm:pc-text-left sm:pc-text-h2-sm",
                !subtitle && "pc-mb-6 sm:pc-mb-0",
                align === "center" && "pc-text-center",
                align === "left" && "pc-text-left",
                align === "right" && "pc-text-right",
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <span className="pc-mb-6 pc-text-center pc-text-note sm:pc-mb-0 sm:pc-text-left">
              {subtitle}
            </span>
          )}
        </div>
      )}
      {(description || content || footer) && (
        <div
          className={cn(
            "pc-flex pc-h-full pc-flex-col pc-items-center pc-gap-10 sm:pc-items-start",
            pushContent && "sm:pc-pt-40",
            splitEvenly ? "pc-w-full pc-flex-1 sm:pc-w-2/4" : "pc-w-full",
          )}
        >
          {description && (
            <p className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-cta sm:pc-text-start sm:pc-text-cta-sm">
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
