import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  SocialMediaLinks as SocialMediaLinksV1,
  type SocialMediaLinksProps,
} from "@repo/components-v1/social-media-links";

export function SocialMediaLinks({
  justify = "center",
}: Omit<SocialMediaLinksProps, "links">) {
  return (
    <SocialMediaLinksV1
      justify={justify}
      links={[
        <a key="mailto:hi@hooore.com" href="mailto:hi@hooore.com">
          <EnvelopeClosedIcon className="h-4 w-4" /> hi@hooore.com
        </a>,
        <a
          target="_blank"
          rel="noreferrer noopener"
          key="https://www.instagram.com/hooore.in/"
          href="https://www.instagram.com/hooore.in/"
        >
          <InstagramLogoIcon className="h-4 w-4" /> hooore.in
        </a>,
        <a
          target="_blank"
          rel="noreferrer noopener"
          key="https://www.linkedin.com/company/hooore"
          href="https://www.linkedin.com/company/hooore"
        >
          <LinkedInLogoIcon className="h-4 w-4" /> Hooore
        </a>,
      ]}
    />
  );
}
