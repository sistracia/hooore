import { Button } from "@repo/components-v1/button";
import { CTA as CTAV1 } from "@repo/components-v1/cta";

export function CTA() {
  return (
    <CTAV1
      button={
        <Button asChild variant="cta">
          <a href="/contact-us">Contact Us</a>
        </Button>
      }
    />
  );
}
