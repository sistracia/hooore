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
        "ss-flex ss-w-full ss-flex-col ss-gap-6 ss-p-6 sm:ss-aspect-square sm:ss-gap-10",
        className,
      )}
    >
      {title && (
        <h3 className="ss-text-balance ss-text-center ss-text-h2 sm:ss-text-start sm:ss-text-h2-sm">
          {title}
        </h3>
      )}
      {description && (
        <p className="ss-text-balance ss-text-center ss-text-p sm:ss-text-start sm:ss-text-p-sm">
          {description}
        </p>
      )}
    </div>
  );
}
