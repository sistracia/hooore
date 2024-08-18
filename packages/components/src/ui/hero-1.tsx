import type { Hero1Props } from "../types/hero-1";
import { OutlineText } from "./common/outline-text";
// import { SocialMediaLinks } from "./social-media-links";
// import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Chip } from "./common/chip";
import { cn } from "@repo/utils";

export function Hero1(props: Hero1Props & { className?: string }) {
  const {
    background,
    headline,
    sub_headline,
    description,
    tag,
    //   socials,
    meta,
    className,
  } = props;

  return (
    <header
      className={cn(
        "ss:pc-pb-[calc(var(--navbar-height-desktop)*2)] pc-relative pc-flex pc-h-full pc-min-h-[600px] pc-px-10 pc-pb-[calc(var(--navbar-height-mobile)*1.5)] pc-pt-[calc(var(--navbar-height-mobile)*2)] sm:pc-min-h-[800px] sm:pc-pb-[calc(var(--navbar-height-desktop))] sm:pc-pt-[calc(var(--navbar-height-desktop)*2)]",
        className,
      )}
    >
      {background && (
        <div className="pc-absolute pc-left-0 pc-top-0 pc-h-full pc-w-full">
          <img
            src={background}
            className="pc-absolute pc-left-0 pc-top-0 pc-h-full pc-w-full pc-object-cover pc-object-[center_65%] pc-opacity-25"
          />
        </div>
      )}
      <div className="pc-z-10 pc-flex pc-w-full pc-flex-col pc-items-center pc-justify-center pc-gap-6 sm:pc-items-start">
        {tag && (
          <div className="pc-flex pc-justify-center sm:pc-justify-start">
            <Chip>{tag}</Chip>
          </div>
        )}

        {sub_headline && (
          <div className="pc-flex pc-justify-center pc-text-2xl sm:pc-justify-start">
            <OutlineText>{sub_headline}</OutlineText>
          </div>
        )}
        {headline && (
          <h1 className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h1 pc-leading-tight sm:pc-text-left sm:pc-text-h1-sm">
            <OutlineText>{headline}</OutlineText>
          </h1>
        )}
        {description && (
          <p className="pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm">
            <OutlineText>{description}</OutlineText>
          </p>
        )}
        {/* {socials && (
          <div className="pc-flex pc-flex-wrap pc-justify-center pc-gap-x-6 sm:pc-justify-start">
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
        )} */}
        {meta && (
          <span className="pc-block pc-text-center pc-text-p sm:pc-text-left sm:pc-text-p-sm">
            {meta}
          </span>
        )}
      </div>
    </header>
  );
}
