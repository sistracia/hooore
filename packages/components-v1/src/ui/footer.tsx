import { cn } from "@repo/utils";
import { Button } from "./button";
import { SocialProps } from "../types/social";
import { SocialMediaLinks } from "./social-media-links";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const linksClassName =
  "pc-flex pc-w-full pc-flex-wrap pc-items-center pc-justify-center pc-gap-x-6 sm:pc-justify-start";

export type FooterProps = {
  navigationLinks: React.ReactNode[];
  socials: SocialProps[];
  additionalLinks: React.ReactNode[];
  businessLogo: React.ReactNode;
};

export function Footer({
  navigationLinks,
  socials,
  additionalLinks,
  businessLogo,
}: FooterProps) {
  return (
    <footer className="pc-bg-black-mamba-500/25 pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20">
      <div className="pc-mb-10 pc-flex pc-flex-col pc-items-center pc-justify-between sm:pc-flex-row sm:pc-items-start">
        <div>
          <div className={cn("pc-mb-8 sm:pc-mb-2", linksClassName)}>
            {navigationLinks.map((navigationLink, navigationLinkIndex) => {
              return (
                <Button
                  key={navigationLinkIndex}
                  asChild
                  variant="link"
                  className="pc-justify-center"
                >
                  {navigationLink}
                </Button>
              );
            })}
          </div>
          {socials && (
            <div className={cn("pc-mb-8 sm:pc-mb-0", linksClassName)}>
              <SocialMediaLinks
                links={socials
                  .filter((social) => {
                    return social.enabled;
                  })
                  .map((social) => {
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
            </div>
          )}
        </div>
        {businessLogo}
      </div>
      <div className={cn("pc-text-crema-cream-800", linksClassName)}>
        {additionalLinks.map((additionalLink, additionalLinkIndex) => {
          return (
            <Button
              key={additionalLinkIndex}
              asChild
              variant="link"
              className="pc-justify-center"
            >
              {additionalLink}
            </Button>
          );
        })}
        <p>© 2024 copyright by Hooore</p>
      </div>
    </footer>
  );
}
