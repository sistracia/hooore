import { AirbnbLogo } from "@/components/airbnb-logo";
import { AmazonLogo } from "@/components/amazon-logo";
import { AsanaLogo } from "@/components/asana-logo";
import { EvernoteLogo } from "@/components/evernote-logo";
import { FramerLogo } from "@/components/framer-logo";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { SocialMediaLinks } from "@/components/social-media-links";
import { UpworkLogo } from "@/components/upwork-logo";

export default function Home() {
  return (
    <>
      <Hero
        background={
          <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/sunrise.png')] ss-bg-cover ss-bg-[center_65%] ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale"></div>
        }
        extra="Hooore /ho·re/ /horé/"
        title={"Turning Tech Dreams\ninto Happy Realities"}
        descripption={
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-x-6 sm:ss-justify-start">
            <SocialMediaLinks />
          </div>
        }
      />
      <div className="ss-h-200px ss-border-t-2 ss-border-t-crema-cream-500 ss-py-6">
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
    </>
  );
}
