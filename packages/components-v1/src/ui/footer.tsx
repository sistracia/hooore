import { cn } from "@repo/utils";
import { Button } from "./button";
import { HoooreLogo } from "./hooore-logo";

const linksClassName =
  "pc-flex pc-w-full pc-flex-wrap pc-items-center pc-justify-center pc-gap-x-6 sm:pc-justify-start";

export type FooterProps = {
  navigationLinks: React.ReactNode[];
  socialMedia: React.ReactNode;
  additionalLinks: React.ReactNode[];
};

export function Footer({
  navigationLinks,
  socialMedia,
  additionalLinks,
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
          {socialMedia && (
            <div className={cn("pc-mb-8 sm:pc-mb-0", linksClassName)}>
              {socialMedia}
            </div>
          )}
        </div>
        <HoooreLogo width={152} height={48} />
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
