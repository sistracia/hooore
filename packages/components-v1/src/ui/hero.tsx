import { SpotlightBackground } from "./spotlight-background";
import type { HeroProps } from "../types/hero";
import { OutlineText } from "./outline-text";
import { SocialMediaLinks } from "./social-media-links";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Chip } from "./chip";

export function Hero({
  background,
  headline,
  sub_headline,
  description,
  tags,
  socials,
  meta,
}: HeroProps) {
  return (
    <header className="ss:pc-pb-[calc(var(--navbar-height-desktop)*2)] pc-relative pc-flex pc-h-full pc-min-h-[80vh] pc-px-10 pc-pb-[calc(var(--navbar-height-mobile)*1.5)] pc-pt-[calc(var(--navbar-height-mobile)*2)] sm:pc-pb-[calc(var(--navbar-height-desktop))] sm:pc-pt-[calc(var(--navbar-height-desktop)*2)]">
      {background && (
        <SpotlightBackground
          src={background}
          className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-object-cover ss-object-[center_65%] ss-opacity-25"
        />
      )}
      <div className="pc-z-10 pc-flex pc-w-full pc-flex-col pc-items-center pc-justify-center pc-gap-6 sm:pc-items-start">
        {tags && (
          <div className="pc-flex pc-justify-center sm:pc-justify-start">
            {tags.split(",").map((tag, tagIndex) => {
              return <Chip key={tagIndex}>{tag}</Chip>;
            })}
          </div>
        )}

        {sub_headline && (
          <div className="pc-flex pc-justify-center sm:pc-justify-start">
            <OutlineText className="ss-text-2xl">{sub_headline}</OutlineText>
          </div>
        )}
        {headline && (
          <h1 className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h1 pc-leading-tight sm:pc-text-left sm:pc-text-h1-sm">
            {headline}
          </h1>
        )}
        {description && (
          <p className="pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm">
            {description}
          </p>
        )}
        {socials && (
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-x-6 sm:ss-justify-start">
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
        {meta && (
          <span className="ss-block ss-text-center ss-text-p sm:ss-text-left sm:ss-text-p-sm">
            {meta}
          </span>
        )}
      </div>
    </header>
  );
}
