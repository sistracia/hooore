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
        "pc-flex pc-w-full pc-flex-col pc-gap-6 pc-p-6 sm:pc-aspect-square sm:pc-gap-10",
        className,
      )}
    >
      {title && (
        <h3 className="pc-text-balance pc-text-center pc-text-h2 sm:pc-text-start sm:pc-text-h2-sm">
          {title}
        </h3>
      )}
      {description && (
        <p className="pc-text-balance pc-text-center pc-text-p sm:pc-text-start sm:pc-text-p-sm">
          {description}
        </p>
      )}
    </div>
  );
}
