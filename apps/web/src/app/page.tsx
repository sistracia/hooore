import { AirbnbLogo } from "@/components/airbnb-logo";
import { AmazonLogo } from "@/components/amazon-logo";
import { AsanaLogo } from "@/components/asana-logo";
import { EvernoteLogo } from "@/components/evernote-logo";
import { FramerLogo } from "@/components/framer-logo";
import { PhotoCard } from "@/components/photo-card";
import { ScrollContainer } from "@/components/scroll-container";
import { UpworkLogo } from "@/components/upwork-logo";
import { Marquee } from "@repo/component/marquee";

function Content() {
  return (
    <main className="relative flex h-dvh flex-col items-center justify-center">
      <PhotoCard />
      <div className="mt-12 flex flex-col items-center justify-center sm:absolute">
        <p className="w-full text-center text-[32px] font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0)] sm:text-[80px]">
          <span className="inline-block">
            Something awesome is coming soon.
          </span>
          <span className="inline-block">Be first to know.</span>
        </p>
        <Marquee>
          <AirbnbLogo />
          <AmazonLogo />
          <AsanaLogo />
          <EvernoteLogo />
          <FramerLogo />
          <UpworkLogo />
        </Marquee>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <ScrollContainer>
      <Content />
    </ScrollContainer>
  );
}
