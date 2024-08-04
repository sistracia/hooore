import { Chip } from "../../ui/chip";
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
        "pc-flex pc-flex-col pc-gap-6 sm:pc-flex-row sm:pc-gap-10",
        className,
      )}
    >
      {thumbnailUrl && (
        <LayerImg
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="pc-h-full pc-max-h-[250px] pc-w-full pc-flex-1 pc-rounded-lg sm:pc-max-w-[250px] sm:pc-flex-[2.5]"
        />
      )}
      <div className="pc-flex pc-flex-col pc-gap-4 sm:pc-flex-1 sm:pc-gap-6">
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
        {footer}
      </div>
    </article>
  );
}
