import { CheckCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/utils";
import { ImgSpotlight } from "./img-spotlight";

export type ServiceCardProps = {
  thumbnailAlt?: string;
  thumbnailUrl?: string;
  title?: string;
  description?: string;
  items?: string[];
  footer?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  direction?: "vertical" | "horizontal";
};

export function ServiceCard({
  thumbnailAlt,
  thumbnailUrl,
  description,
  items,
  footer,
  title,
  className,
  backgroundColor,
  direction = "vertical",
}: ServiceCardProps) {
  const isVertical = direction === "vertical";
  const isHorizontal = direction === "horizontal";

  return (
    <div
      style={{ backgroundColor }}
      className={cn(
        "pc-flex pc-w-full pc-rounded-lg",
        isVertical && "pc-flex-col",
        isHorizontal && "pc-flex-col sm:pc-flex-row",
        className,
      )}
    >
      {thumbnailUrl && (
        <div className="pc-flex pc-justify-center pc-bg-[rgba(2,12,13,0.2)]">
          <ImgSpotlight
            src={thumbnailUrl}
            alt={thumbnailAlt}
            spotlightAlt={`${thumbnailAlt} Spotlight`}
            className={cn(
              "pc-flex pc-aspect-square pc-h-auto pc-items-center pc-justify-center",
              isHorizontal && "pc-h-80 pc-max-w-80 sm:pc-h-72 sm:pc-max-w-72",
            )}
          />
        </div>
      )}
      <div
        className={cn(
          "pc-flex pc-h-full pc-w-full pc-flex-col pc-gap-4",
          isVertical && "pc-p-6",
          isHorizontal && "sm:pc-pl-12",
        )}
      >
        <div className="pc-flex pc-flex-1 pc-flex-col pc-gap-4">
          {title && (
            <h3 className="pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm">
              {title}
            </h3>
          )}
          {description && (
            <p className="pc-text-balance pc-text-center pc-text-p sm:pc-text-start sm:pc-text-p-sm">
              {description}
            </p>
          )}
          {items && (
            <table
              className={cn(
                "pc-border-separate pc-border-spacing-2",
                isHorizontal && "pc-text-h4 sm:pc-text-h2",
                isVertical && "pc-text-h4",
              )}
            >
              <tbody>
                {items?.map((item, itemIndex) => {
                  return (
                    <tr key={itemIndex}>
                      <td className="pc-w-[24px]">
                        <CheckCircledIcon width={24} height={24} />
                      </td>
                      <td>{item}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        {footer}
      </div>
    </div>
  );
}
