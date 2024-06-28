import { Button } from "./button";
import Link from "next/link";
import { SocialMediaLinks } from "./social-media-links";
import { HoooreLogo } from "./hooore-logo";

export function Footer() {
  return (
    <footer className="ss-flex ss-flex-col ss-justify-between ss-border-t-2 ss-border-t-crema-cream-500 ss-bg-black-mamba-500/25 ss-p-20 sm:ss-flex-row">
      <div className="ss-mb-6">
        <div className="ss-mb-4 ss-flex ss-flex-col ss-flex-wrap ss-gap-4 sm:ss-flex-row sm:ss-gap-6">
          <Button asChild className="ss-my-2 ss-justify-center">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild className="ss-my-2 ss-justify-center">
            <Link href="/service/software-development">
              Software Development
            </Link>
          </Button>
          <Button asChild className="ss-my-2 ss-justify-center">
            <Link href="/service/ui-ux-design">UI/UX Design</Link>
          </Button>
          <Button asChild className="ss-my-2 ss-justify-center">
            <Link href="/service/training-upskilling">
              Training & Upskilling
            </Link>
          </Button>
          <Button asChild className="ss-my-2 ss-justify-center">
            <Link href="/about-us">About Us</Link>
          </Button>
          <Button asChild className="ss-my-2 ss-justify-center">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        <div className="ss-flex ss-flex-col ss-gap-4 sm:ss-flex-row sm:ss-gap-6">
          <SocialMediaLinks />
        </div>
      </div>
      <HoooreLogo width={152} height={48} />
    </footer>
  );
}
