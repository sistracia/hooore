import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";
import { SocialMediaLinks } from "@/components/social-media-links";

export default function ContactUs() {
  return (
    <Hero
      header={<Chip>Contact</Chip>}
      title="Have a cool project for us?"
      descripption="Fill in the form, or send us an email holla@hooore.com"
      footer={<SocialMediaLinks />}
      background={
        <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/customer-service.png')] ss-bg-contain ss-bg-bottom ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale sm:ss-bg-cover sm:ss-bg-[center_-5%]"></div>
      }
    />
  );
}
