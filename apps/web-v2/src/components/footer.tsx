import { Button } from "./button";
import Link from "next/link";
import { SocialMediaLinks } from "./social-media-links";
import { HoooreLogo } from "./hooore-logo";

const linksClassName =
  "ss-flex ss-w-full ss-flex-wrap ss-items-center ss-justify-center ss-gap-x-6 sm:ss-justify-start";

export function Footer() {
  return (
    <footer className="ss-border-t-4 ss-border-t-crema-cream-500 ss-bg-black-mamba-500/25 ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20">
      <div className="ss-mb-10 ss-flex ss-flex-col ss-items-center ss-justify-between sm:ss-flex-row sm:ss-items-start">
        <div>
          <div className={`ss-mb-8 sm:ss-mb-2 ${linksClassName}`}>
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
              <Link href="/portfolio">Portfolio</Link>
            </Button>
            <Button asChild variant="link" className="ss-justify-center">
              <Link href="/blog">Blog</Link>
            </Button>
            <Button asChild variant="link" className="ss-justify-center">
              <Link href="/about-us">About Us</Link>
            </Button>
            <Button asChild variant="link" className="ss-justify-center">
              <Link href="/contact-us">Contact</Link>
            </Button>
          </div>
          <div className={`ss-mb-8 sm:ss-mb-0 ${linksClassName}`}>
            <SocialMediaLinks />
          </div>
        </div>
        <HoooreLogo width={152} height={48} />
      </div>
      <div className={`ss-text-crema-cream-800 ${linksClassName}`}>
        <Button asChild variant="link" className="ss-justify-center">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Button>
        <Button asChild variant="link" className="ss-justify-center">
          <Link href="/term-and-condition">Term & Condition</Link>
        </Button>
        <p>© 2024 copyright by Hooore</p>
      </div>
    </footer>
  );
}
