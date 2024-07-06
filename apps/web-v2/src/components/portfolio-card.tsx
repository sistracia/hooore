import { Chip } from "./chip";
import { cn } from "@repo/utils";
import { LayerImg } from "./layer-img";

export type PortfolioCardProps = {
  title?: string;
  footer?: React.ReactNode;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
  tags?: string[];
  className?: string;
};

export function PortfolioCard({
  title,
  footer,
  tags,
  thumbnailAlt,
  thumbnailUrl,
  className,
}: PortfolioCardProps) {
  return (
    <article
      className={cn(
        "ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row-reverse",
        className,
      )}
    >
      {thumbnailUrl && (
        <LayerImg
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="sm:ss-flex-2 ss-max-h-[350px] ss-flex-1 ss-rounded-lg sm:ss-max-h-[350px] sm:ss-flex-[2.5]"
        />
      )}
      <div className="ss-flex ss-flex-col ss-justify-center ss-gap-6 sm:ss-flex-1">
        {tags && (
          <div>
            {tags.map((tag, tagIndex) => {
              return <Chip key={tagIndex}>{tag}</Chip>;
            })}
          </div>
        )}
        {title && <h2 className="ss-text-3xl sm:ss-text-5xl">{title}</h2>}
        {footer}
      </div>
    </article>
  );
}
