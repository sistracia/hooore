import { Chip } from "./chip";
import { cn } from "@repo/utils";
import { LayerImg } from "./layer-img";

export type BlogCardProps = {
  title?: string;
  footer?: React.ReactNode;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
  tags?: string[];
  className?: string;
  meta?: string;
  description?: string;
};

export function BlogCard({
  title,
  footer,
  tags,
  thumbnailAlt,
  thumbnailUrl,
  className,
  meta,
  description,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "pc-flex pc-flex-col pc-gap-6 sm:pc-flex-row sm:pc-gap-12",
        className,
      )}
    >
      {thumbnailUrl && (
        <LayerImg
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="flex-1 pc-max-h-[320px] pc-flex-1 pc-rounded-lg sm:pc-max-h-[250px]"
        />
      )}
      <div className="pc-flex pc-flex-1 pc-flex-col pc-gap-4 sm:pc-gap-6">
        {title && (
          <h2 className="pc-text-balance pc-text-h3 sm:pc-text-h3-sm">
            {title}
          </h2>
        )}
        {tags && (
          <div>
            {tags.map((tag, tagIndex) => {
              return <Chip key={tagIndex}>{tag}</Chip>;
            })}
          </div>
        )}
        {meta && (
          <span className="pc-text-p pc-text-crema-cream-700 sm:pc-text-p-sm">
            {meta}
          </span>
        )}
      </div>
      <div className="pc-flex pc-flex-[2] pc-flex-col pc-gap-6 sm:pc-gap-12">
        {description && (
          <p className="pc-text-balance pc-text-p sm:pc-text-p-sm">
            {description}
          </p>
        )}
        {footer}
      </div>
    </article>
  );
}
