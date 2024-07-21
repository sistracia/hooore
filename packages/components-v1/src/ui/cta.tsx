import { Content4 } from "./content4";
import { SpotlightBackground } from "./spotlight-background";

export type CTAProps = {
  button?: React.ReactNode;
};

export function CTA({ button }: CTAProps) {
  return (
    <section className="pc-relative">
      <SpotlightBackground
        src="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778352/hooore-web-profile/work-together.png"
        className="pc-h-full pc-w-full pc-object-cover pc-object-[center_90%] pc-brightness-50"
        alt="Get started today background"
        spotlightAlt="Get started today background spotlight"
      />
      <Content4
        className="pc-relative pc-z-10"
        title="Get Started Today!"
        description="Let's discuss your project and see how we can help you achieve your business goals."
        footer={button}
      />
    </section>
  );
}
