import { AirbnbLogo } from "@/components/airbnb-logo";
import { AmazonLogo } from "@/components/amazon-logo";
import { AsanaLogo } from "@/components/asana-logo";
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Content3 } from "@/components/content3";
import { CTA } from "@/components/cta";
import { EvernoteLogo } from "@/components/evernote-logo";
import { FramerLogo } from "@/components/framer-logo";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ServiceCard } from "@/components/service-card";
import { SocialMediaLinks } from "@/components/social-media-links";
import { UpworkLogo } from "@/components/upwork-logo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero
        background={
          <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/sunrise.png')] ss-bg-cover ss-bg-[center_65%] ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale"></div>
        }
        header={<span className="ss-text-2xl">Hooore /ho·re/ /horé/</span>}
        title={"Turning Tech Dreams\ninto Happy Realities"}
        footer={
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-x-6 sm:ss-justify-start">
            <SocialMediaLinks />
          </div>
        }
      />
      <div className="ss-h-200px ss-py-6">
        <Marquee className="w-full py-2 sm:py-6" display={6}>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <AirbnbLogo
              alt="Airbnb Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <AmazonLogo
              alt="Amazon Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <AsanaLogo
              alt="Asana Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <EvernoteLogo
              alt="Evernote Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <FramerLogo
              alt="Framer Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <UpworkLogo
              alt="Upwork Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
        </Marquee>
      </div>
      <Content3
        className="ss-border-t-2 ss-border-t-crema-cream-500"
        header={<Chip>Services</Chip>}
        title="Where the joy meets technology."
        description="We believe in the power of innovation to bring happiness and excitement to our clients. Our mission is to deliver exceptional digital solutions that exceed expectations and inspire delight."
        footer={
          <div className="ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12">
            <ServiceCard
              thumbnailUrl="/rocket.png"
              thumbnailAlt="Software Development Logo"
              className="ss-flex-1 ss-bg-green-nyai-500"
              title="Software Development"
              items={[
                "Custom Web Applications",
                "Content Management Systems",
                "API Development and Integration",
              ]}
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center ss-text-center sm:ss-w-fit"
                >
                  <Link href="/service/software-development">Learn More</Link>
                </Button>
              }
            />
            <ServiceCard
              thumbnailUrl="/wand.png"
              thumbnailAlt="UI/UX Design Logo"
              className="ss-flex-1 ss-bg-blue-clair-700"
              title="UI/UX Design"
              items={["Website & App Design", "User Research and Analysis"]}
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center ss-text-center sm:ss-w-fit"
                >
                  <Link href="/service/ui-ux-design">Learn More</Link>
                </Button>
              }
            />
            <ServiceCard
              thumbnailUrl="/apple.png"
              thumbnailAlt="Training & Upskilling Logo"
              className="ss-flex-1 ss-bg-oranje-600"
              title="Training & Upskilling"
              items={["Web Development Bootcamps", "UI/UX Design Courses"]}
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center ss-text-center sm:ss-w-fit"
                >
                  <Link href="/service/training-upskilling">Learn More</Link>
                </Button>
              }
            />
          </div>
        }
      />
      <CTA />
    </>
  );
}
