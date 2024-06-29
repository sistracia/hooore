import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./button";
import { cn } from "@repo/utils";

export type SocialMediaLinksProps = {
  justify?: "start" | "center" | "end";
};

export function SocialMediaLinks({
  justify = "center",
}: SocialMediaLinksProps) {
  return (
    <>
      <Button
        asChild
        className={cn(
          justify === "center" && "ss-justify-center",
          justify === "start" && "ss-justify-start",
          justify === "end" && "ss-justify-end",
        )}
      >
        <a href="mailto:hi@hooore.com">
          <EnvelopeClosedIcon className="h-4 w-4" /> hi@hooore.com
        </a>
      </Button>
      <Button
        asChild
        className={cn(
          justify === "center" && "ss-justify-center",
          justify === "start" && "ss-justify-start",
          justify === "end" && "ss-justify-end",
        )}
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/hooore.in/"
        >
          <InstagramLogoIcon className="h-4 w-4" /> hooore.in
        </a>
      </Button>
      <Button
        asChild
        className={cn(
          justify === "center" && "ss-justify-center",
          justify === "start" && "ss-justify-start",
          justify === "end" && "ss-justify-end",
        )}
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/company/hooore"
        >
          <LinkedInLogoIcon className="h-4 w-4" /> in/hooore
        </a>
      </Button>
    </>
  );
}
