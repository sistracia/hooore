import Link from "next/link";
import { Button } from "./button";
import { Content4 } from "./content4";

export function CTA() {
  return (
    <div className="ss-relative ss-border-t-2 ss-border-t-crema-cream-500">
      <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/work-together.png')] ss-bg-cover ss-bg-[center_90%] ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale"></div>
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
    </div>
  );
}
