import { CallToActionProps } from "../types/call-to-action";
import { Button } from "./button";
import { Content4 } from "../backup-remove-later/ui/content4";
import { SpotlightBackground } from "./spotlight-background";

export function CallToAction({
  background,
  cta_button_label,
  cta_link,
  description,
  headline,
}: CallToActionProps) {
  return (
    <section className="pc-relative">
      {background && (
        <SpotlightBackground
          src={background}
          className="pc-h-full pc-w-full pc-object-cover pc-object-[center_90%] pc-brightness-50"
        />
      )}
      <Content4
        className="pc-relative pc-z-10"
        title={headline}
        description={description}
        footer={
          cta_button_label && (
            <Button asChild variant="cta">
              <a href={cta_link}>{cta_button_label}</a>
            </Button>
          )
        }
      />
    </section>
  );
}
