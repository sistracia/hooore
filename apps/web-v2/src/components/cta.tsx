import Link from "next/link";
import { Button } from "./button";
import { Content4 } from "./content4";
import { SpotlightBackground } from "./spotlight-background";

export function CTA() {
  return (
    <section className="ss-relative ss-border-t-2 ss-border-t-crema-cream-500">
      <SpotlightBackground>
        <div className="ss-h-full ss-w-full ss-bg-[url('/work-together.png')] ss-bg-cover ss-bg-[center_90%] ss-bg-no-repeat ss-fill-none ss-brightness-50"></div>
      </SpotlightBackground>
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
