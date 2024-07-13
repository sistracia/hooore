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
        "ss-group ss-relative ss-flex ss-min-h-[var(--height-mobile)] ss-flex-col-reverse ss-gap-6 sm:ss-min-h-[var(--height-desktop)] sm:ss-flex-row",
        className,
      )}
    >
      <div className="ss-flex ss-w-full ss-flex-col ss-justify-center ss-gap-6 ss-transition-opacity ss-duration-300 sm:sm:ss-w-[20%] sm:ss-opacity-0 sm:group-hover:ss-opacity-100">
        {tags && (
          <div>
            {tags.map((tag, tagIndex) => {
              return <Chip key={tagIndex}>{tag}</Chip>;
            })}
          </div>
        )}
        {title && (
          <h2 className="ss-text-balance ss-text-h2 sm:ss-text-h2-sm">
            {title}
          </h2>
        )}
        {footer && (
          <div className="ss-transition-transform ss-duration-300 sm:ss-translate-y-full sm:group-hover:ss-translate-y-0">
            {footer}
          </div>
        )}
      </div>
      {thumbnailUrl && (
        <LayerImg
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className="ss-flex ss-max-h-[var(--height-mobile)] ss-w-full ss-items-center ss-justify-center ss-rounded-lg ss-transition-[width] ss-duration-300 sm:ss-absolute sm:ss-right-0 sm:ss-top-0 sm:ss-max-h-[var(--height-desktop)] sm:ss-w-full sm:group-hover:ss-w-[80%]"
        />
      )}
    </article>
  );
}
