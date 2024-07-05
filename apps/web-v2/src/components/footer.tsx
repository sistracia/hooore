import { Button } from "./button";
import Link from "next/link";
import { SocialMediaLinks } from "./social-media-links";
import { HoooreLogo } from "./hooore-logo";

export function Footer() {
  return (
    <footer className="ss-flex ss-flex-col ss-items-center ss-justify-between ss-border-t-4 ss-border-t-crema-cream-500 ss-bg-black-mamba-500/25 ss-p-20 sm:ss-flex-row sm:ss-items-start">
      <div className="ss-mb-6">
        <div className="ss-mb-4 ss-flex ss-flex-col ss-flex-wrap ss-gap-8 sm:ss-flex-row sm:ss-gap-6">
          <Button asChild variant="link" className="ss-justify-center">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="link" className="ss-justify-center">
            <Link href="/service/software-development">
              Software Development
            </Link>
          </Button>
          <Button asChild variant="link" className="ss-justify-center">
            <Link href="/service/ui-ux-design">UI/UX Design</Link>
          </Button>
          <Button asChild variant="link" className="ss-justify-center">
            <Link href="/service/training-upskilling">
              Training & Upskilling
            </Link>
          </Button>
          <Button asChild variant="link" className="ss-justify-center">
            <Link href="/about-us">About Us</Link>
          </Button>
          <Button asChild variant="link" className="ss-justify-center">
            <Link href="/contact-us">Contact</Link>
          </Button>
        </div>
        <div className="ss-flex ss-flex-col ss-gap-8 sm:ss-flex-row sm:ss-gap-6">
          <SocialMediaLinks />
        </div>
      </div>
      <HoooreLogo width={152} height={48} />
    </footer>
  );
}
