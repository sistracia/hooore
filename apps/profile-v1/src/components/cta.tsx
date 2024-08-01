import { CTA as CTAV1 } from "@repo/components-v1/cta";

export function CTA() {
  return (
    <CTAV1
      headline="Get Started Today!"
      description="Let's discuss your project and see how we can help you achieve your business goals."
      background="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778352/hooore-web-profile/work-together.png"
      cta_link="/contact-us"
      cta_button_label="Contact Us"
    />
  );
}
