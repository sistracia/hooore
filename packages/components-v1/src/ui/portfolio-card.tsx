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
      style={
        {
          "--height-mobile": "350px",
          "--height-desktop": "500px",
        } as React.CSSProperties
      }
      className={cn(
        "pc-group pc-relative pc-flex pc-min-h-[var(--height-mobile)] pc-flex-col-reverse pc-gap-6 sm:pc-min-h-[var(--height-desktop)] sm:pc-flex-row",
        className,
      )}
    >
      <div className="pc-flex pc-w-full pc-flex-col pc-justify-center pc-gap-6 pc-transition-opacity pc-duration-300 sm:sm:pc-w-[20%] sm:pc-opacity-0 sm:group-hover:pc-opacity-100">
        {tags && (
          <div>
            {tags.map((tag, tagIndex) => {
              return <Chip key={tagIndex}>{tag}</Chip>;
            })}
          </div>
        )}
        {title && (
          <h2 className="pc-text-balance pc-text-h2 sm:pc-text-h2-sm">
            {title}
          </h2>
        )}
        {footer && (
          <div className="pc-transition-transform pc-duration-300 sm:pc-translate-y-full sm:group-hover:pc-translate-y-0">
            {footer}
          </div>
        )}
      </div>
      {thumbnailUrl && (
        <LayerImg
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="pc-flex pc-max-h-[var(--height-mobile)] pc-w-full pc-items-center pc-justify-center pc-rounded-lg pc-transition-[width] pc-duration-300 sm:pc-absolute sm:pc-right-0 sm:pc-top-0 sm:pc-max-h-[var(--height-desktop)] sm:pc-w-full sm:group-hover:pc-w-[80%]"
        />
      )}
    </article>
  );
}
