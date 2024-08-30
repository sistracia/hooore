import { cn } from "@repo/utils";
import type { CallToAction1Props } from "../types/call-to-action-1";
import { Button } from "./common/button";

export function CallToAction1(
  props: CallToAction1Props & {
    disableLink?: boolean;
    className?: string;
  },
) {
  const {
    background,
    cta_button_label,
    cta_link,
    description,
    headline,
    disableLink = false,
    className,
  } = props;

  return (
    <section
      className={cn("pc-relative pc-text-[rgb(var(--background))]", className)}
    >
      {background && (
        <div className="pc-absolute pc-left-0 pc-top-0 pc-h-full pc-w-full">
          <img
            src={background}
            loading="lazy"
            className="pc-h-full pc-w-full pc-object-cover pc-object-[center_90%] pc-brightness-50"
          />
        </div>
      )}
      <div className="pc-relative pc-z-10 pc-flex pc-h-full pc-w-full pc-flex-col pc-items-center pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-items-start sm:pc-px-20 sm:pc-py-20">
        {headline && (
          <div className="pc-flex pc-w-full pc-flex-col pc-gap-6 sm:pc-mr-12 sm:pc-w-fit">
            {headline && (
              <h2 className="pc-mb-6 pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h2 sm:pc-mb-0 sm:pc-text-left sm:pc-text-h2-sm">
                {headline}
              </h2>
            )}
          </div>
        )}
        {description && (
          <div className="pc-flex pc-h-full pc-flex-col pc-items-center pc-gap-10 sm:pc-items-start sm:pc-pt-40">
            {description && (
              <p className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-cta sm:pc-text-start sm:pc-text-cta-sm">
                {description}
              </p>
            )}
            {cta_button_label && (
              <Button asChild variant="cta">
                <a href={disableLink ? undefined : cta_link}>
                  {cta_button_label}
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
