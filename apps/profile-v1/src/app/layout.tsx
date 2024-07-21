import "./globals.css";
import "@repo/components-v1/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@repo/utils";
import { PageScroll } from "@repo/smooth-scroll/react/page-scroll";
import { Footer } from "@repo/components-v1/footer";
import { Navbar } from "@/components/nav-bar";
import { Suspense } from "react";
import { Toaster } from "@/components/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Divider } from "@repo/components-v1/divider";
import Link from "next/link";
import { SocialMediaLinks } from "@/components/social-media-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hooore",
  description: "Turning Tech Dreams into Happy Realities",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon-light.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-dark.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "ss-bg-page-background")}>
        <Suspense>
          <Navbar />
        </Suspense>
        <PageScroll>
          {children}
          <Divider height={4} />
          <Footer
            navigationLinks={[
              <Link key="/" href="/">
                Home
              </Link>,
              <Link
                key="/service/software-development"
                href="/service/software-development"
              >
                Software Development
              </Link>,
              <Link key="/service/ui-ux-design" href="/service/ui-ux-design">
                UI/UX Design
              </Link>,
              <Link
                key="/service/training-upskilling"
                href="/service/training-upskilling"
              >
                Training & Upskilling
              </Link>,
              <Link key="/portfolio" href="/portfolio">
                Portfolio
              </Link>,
              <Link key="/blog" href="/blog">
                Blog
              </Link>,
              <Link key="/about" href="/about-us">
                About Us
              </Link>,
              <Link key="/contact" href="/contact-us">
                Contact
              </Link>,
            ]}
            additionalLinks={[
              <Link key="/privacy-policy" href="/privacy-policy">
                Privacy Policy
              </Link>,
              <Link key="/term-and-condition" href="/term-and-condition">
                Term & Condition
              </Link>,
            ]}
            socialMedia={<SocialMediaLinks />}
          />
        </PageScroll>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
