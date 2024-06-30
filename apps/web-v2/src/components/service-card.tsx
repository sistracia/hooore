import { CheckCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/utils";

export type ServiceCardProps = {
  thumbnailAlt?: string;
  thumbnailUrl?: string;
  title?: string;
  description?: string;
  items?: string[];
  footer?: React.ReactNode;
  className?: string;
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
  direction = "vertical",
}: ServiceCardProps) {
  const isVertical = direction === "vertical";
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "ss-flex ss-w-full",
        isVertical && "ss-flex-col",
        isHorizontal && "ss-flex-col sm:ss-flex-row",
        className,
      )}
    >
      <div className="ss-flex ss-justify-center ss-bg-[rgba(2,12,13,0.2)]">
        <img
          src={thumbnailUrl}
          alt={thumbnailAlt}
          className={cn(
            "ss-aspect-square ss-h-auto ss-mix-blend-luminosity ss-grayscale",
            isHorizontal && "ss-h-80 ss-max-w-80 sm:ss-h-72 sm:ss-max-w-72",
          )}
        />
      </div>
      <div
        className={cn(
          "ss-flex ss-w-full ss-flex-col ss-gap-6 sm:ss-gap-10",
          isVertical && "ss-p-6",
          isHorizontal && "sm:ss-pl-12",
        )}
      >
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
              {items?.map((item, index) => {
                return (
                  <tr key={index}>
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
        {footer}
      </div>
    </div>
  );
}
