import { cn } from "@repo/utils";

export type SimpleCardProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function SimpleCard({ description, title, className }: SimpleCardProps) {
  return (
    <div
      className={cn(
        "ss-flex ss-aspect-square ss-w-full ss-flex-col ss-gap-6 ss-p-6 sm:ss-gap-10",
        className,
      )}
    >
      {title && (
        <h3 className="ss-text-center ss-text-4xl sm:ss-text-start">{title}</h3>
      )}
      {description && (
        <p className="ss-text-center ss-text-xl sm:ss-text-start">
          {description}
        </p>
      )}
    </div>
  );
}
