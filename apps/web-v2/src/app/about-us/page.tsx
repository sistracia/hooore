import { Hero } from "@/components/hero";
import { SocialMediaLinks } from "@/components/social-media-links";

export default function AboutUs() {
  return (
    <Hero
      title="Have a cool project for us?"
      descripption={
        <>
          <p>Fill in the form, or send us an email holla@hooore.com</p>
          <SocialMediaLinks />
        </>
      }
    />
  );
}
