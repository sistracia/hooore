import "./globals.css";
import "@repo/components-v1/styles.css";

import React from "react";
import { PageScroll } from "@repo/smooth-scroll/react/page-scroll";
import { Footer } from "@repo/components-v1/footer";
import { Navbar } from "../components/nav-bar";
import { Divider } from "@repo/components-v1/divider";
import { SocialMediaLinks } from "../components/social-media-links";

export function ReactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="ss-bg-page-background">
      <Navbar />
      <PageScroll>
        {children}
        <Divider height={4} />
        <Footer
          navigationLinks={[
            <a key="/" href="/">
              Home
            </a>,
            <a
              key="/service/software-development"
              href="/service/software-development"
            >
              Software Development
            </a>,
            <a key="/service/ui-ux-design" href="/service/ui-ux-design">
              UI/UX Design
            </a>,
            <a
              key="/service/training-upskilling"
              href="/service/training-upskilling"
            >
              Training & Upskilling
            </a>,
            <a key="/portfolio" href="/portfolio">
              Portfolio
            </a>,
            <a key="/blog" href="/blog">
              Blog
            </a>,
            <a key="/about" href="/about-us">
              About Us
            </a>,
            <a key="/contact" href="/contact-us">
              Contact
            </a>,
          ]}
          additionalLinks={[
            <a key="/privacy-policy" href="/privacy-policy">
              Privacy Policy
            </a>,
            <a key="/term-and-condition" href="/term-and-condition">
              Term & Condition
            </a>,
          ]}
          socialMedia={<SocialMediaLinks />}
        />
      </PageScroll>
    </body>
  );
}
