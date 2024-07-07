import Link from "next/link";
import { Button } from "./button";
import { Content4 } from "./content4";
import { SpotlightBackground } from "./spotlight-background";

export function CTA() {
  return (
    <section className="ss-relative">
      <SpotlightBackground
        src="/work-together.png"
        className="ss-h-full ss-w-full ss-object-cover ss-object-[center_90%] ss-brightness-50"
        alt="Get started today background"
        spotlightAlt="Get started today background spotlight"
      />
      <Content4
        className="ss-relative ss-z-10"
        title="Get Started Today!"
        description="Let's discuss your project and see how we can help you achieve your business goals."
        footer={
          <Button asChild variant="cta">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        }
      />
    </section>
  );
}
