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
        "ss-flex ss-w-full ss-rounded-lg",
        isVertical && "ss-flex-col",
        isHorizontal && "ss-flex-col sm:ss-flex-row",
        className,
      )}
    >
      {thumbnailUrl && (
        <div className="ss-flex ss-justify-center ss-bg-[rgba(2,12,13,0.2)]">
          <ImgSpotlight
            src={thumbnailUrl}
            alt={thumbnailAlt}
            spotlightAlt={`${thumbnailAlt} Spotlight`}
            className={cn(
              "ss-flex ss-aspect-square ss-h-auto ss-items-center ss-justify-center",
              isHorizontal && "ss-h-80 ss-max-w-80 sm:ss-h-72 sm:ss-max-w-72",
            )}
          />
        </div>
      )}
      <div
        className={cn(
          "ss-flex ss-h-full ss-w-full ss-flex-col ss-gap-6 sm:ss-gap-10",
          isVertical && "ss-p-6",
          isHorizontal && "sm:ss-pl-12",
        )}
      >
        <div className="ss-flex ss-flex-1 ss-flex-col ss-gap-6 sm:ss-gap-10">
          {title && (
            <h3 className="ss-text-center ss-text-2xl sm:ss-text-start sm:ss-text-4xl">
              {title}
            </h3>
          )}
          {description && (
            <p className="ss-text-center ss-text-xl sm:ss-text-start">
              {description}
            </p>
          )}
          {items && (
            <table
              className={cn(
                "ss-border-separate ss-border-spacing-2",
                isHorizontal && "ss-text-2xl sm:ss-text-4xl",
                isVertical && "ss-text-xl",
              )}
            >
              <tbody>
                {items?.map((item, itemIndex) => {
                  return (
                    <tr key={itemIndex}>
                      <td className="ss-w-[24px]">
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
