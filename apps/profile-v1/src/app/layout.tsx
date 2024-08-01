import "./globals.css";
import "@repo/components-v1/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@repo/utils";
import { PageScroll } from "@repo/smooth-scroll/react/page-scroll";
import { Footer } from "@repo/components-v1/footer";
import { Navbar } from "@repo/components-v1/nav-bar";
import { Suspense } from "react";
import { Toaster } from "@/components/toaster";
import { Divider } from "@repo/components-v1/divider";
import Script from "next/script";
import { HoooreLogo } from "@/components/hooore-logo";
import { SocialMediaLinks } from "@repo/components-v1/social-media-links";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

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
      type: "image/x-icon",
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
        <PageScroll>
          <Suspense>
            <Navbar
              logo={
                <HoooreLogo className="ss-h-[28px] ss-w-[89px] sm:ss-h-[48px] sm:ss-w-[152px]" />
              }
              link={[
                {
                  label: "Home",
                  link: "/",
                },
                {
                  label: "Services",
                  link: "/service",
                  sub_link: [
                    {
                      label: "Software Development",
                      link: "/service/software-development",
                    },
                    {
                      label: "UI/UX Design",
                      link: "/service/ui-ux-design",
                    },
                    {
                      label: "Training & Upskilling",
                      link: "/service/training-upskilling",
                    },
                  ],
                },
                {
                  label: "About Us",
                  link: "/about-us",
                },
                {
                  label: "Contact",
                  link: "/contact-us",
                },
              ]}
              socials={
                <SocialMediaLinks
                  links={[
                    {
                      base_url: "mailto:",
                      username: "hi@hooore.com",
                    },
                    {
                      base_url: "https://www.instagram.com/",
                      username: "hooore.in",
                    },
                    {
                      base_url: "https://www.linkedin.com/company/",
                      username: "hooore",
                    },
                  ].map((social) => {
                    return (
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        key={`${social.base_url}${social.username}`}
                        href={`${social.base_url}${social.username}`}
                      >
                        <EnvelopeClosedIcon className="h-4 w-4" />{" "}
                        {social.username}
                      </a>
                    );
                  })}
                />
              }
            />
          </Suspense>
          {children}
          <Divider height={4} />
          <Footer
            logo={<HoooreLogo width={152} height={48} />}
            copyright="© 2024 copyright by Hooore"
            link={[
              {
                label: "Home",
                link: "/",
              },
              {
                label: "Software Development",
                link: "/service/software-development",
              },
              {
                label: "UI/UX Design",
                link: "/service/ui-ux-design",
              },
              {
                label: "Training & Upskilling",
                link: "/service/training-upskilling",
              },
              {
                label: "About Us",
                link: "/about",
              },
              {
                label: "Contact",
                link: "/contact",
              },
            ]}
            additional_link={[
              { label: "Privacy Policy", link: "/privacy-policy" },
              { label: "Term & Condition", link: "/term-and-condition" },
            ]}
            socials={
              <SocialMediaLinks
                links={[
                  {
                    base_url: "mailto:",
                    username: "hi@hooore.com",
                  },
                  {
                    base_url: "https://www.instagram.com/",
                    username: "hooore.in",
                  },
                  {
                    base_url: "https://www.linkedin.com/company/",
                    username: "hooore",
                  },
                ].map((social) => {
                  return (
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      key={`${social.base_url}${social.username}`}
                      href={`${social.base_url}${social.username}`}
                    >
                      <EnvelopeClosedIcon className="h-4 w-4" />{" "}
                      {social.username}
                    </a>
                  );
                })}
              />
            }
          />
        </PageScroll>
        <Toaster />
        <Script
          defer
          src="https://analytics.hooore.com/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        />
      </body>
    </html>
  );
}
