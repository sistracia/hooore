import { Button } from "../../ui/button";
import { cn } from "@repo/utils";
import { OutlineText } from "../../ui/outline-text";

export type SocialMediaLinksProps = {
  justify?: "start" | "center" | "end";
  links: React.ReactNode[];
};

export function SocialMediaLinks({
  justify = "center",
  links,
}: SocialMediaLinksProps) {
  return links.map((link, linkIndex) => {
    return (
      <Button
        key={linkIndex}
        asChild
        variant="link"
        className={cn(
          justify === "center" && "pc-justify-center",
          justify === "start" && "pc-justify-start",
          justify === "end" && "pc-justify-end",
        )}
      >
        <OutlineText asChild>{link}</OutlineText>
      </Button>
    );
  });
}
