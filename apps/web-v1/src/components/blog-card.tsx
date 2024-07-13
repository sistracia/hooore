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
        "ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12",
        className,
      )}
    >
      {thumbnailUrl && (
        <LayerImg
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="flex-1 ss-max-h-[320px] ss-flex-1 ss-rounded-lg sm:ss-max-h-[250px]"
        />
      )}
      <div className="ss-flex ss-flex-1 ss-flex-col ss-gap-4 sm:ss-gap-6">
        {title && (
          <h2 className="ss-text-balance ss-text-h3 sm:ss-text-h3-sm">
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
          <span className="ss-text-p ss-text-crema-cream-700 sm:ss-text-p-sm">
            {meta}
          </span>
        )}
      </div>
      <div className="ss-flex ss-flex-[2] ss-flex-col ss-gap-6 sm:ss-gap-12">
        {description && (
          <p className="ss-text-balance ss-text-p sm:ss-text-p-sm">
            {description}
          </p>
        )}
        {footer}
      </div>
    </article>
  );
}
