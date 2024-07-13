import { Chip } from "./chip";
import { cn } from "@repo/utils";
import { LayerImg } from "./layer-img";

export type RelatedContentCardProps = {
  title?: string;
  footer?: React.ReactNode;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
  tags?: string[];
  className?: string;
  meta?: string;
};

export function RelatedContentCard({
  title,
  footer,
  tags,
  thumbnailAlt,
  thumbnailUrl,
  className,
  meta,
}: RelatedContentCardProps) {
  return (
    <article
      className={cn(
        "ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-10",
        className,
      )}
    >
      {thumbnailUrl && (
        <LayerImg
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="ss-h-full ss-max-h-[250px] ss-w-full ss-flex-1 ss-rounded-lg sm:ss-max-w-[250px] sm:ss-flex-[2.5]"
        />
      )}
      <div className="ss-flex ss-flex-col ss-gap-4 sm:ss-flex-1 sm:ss-gap-6">
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
        {footer}
      </div>
    </article>
  );
}
