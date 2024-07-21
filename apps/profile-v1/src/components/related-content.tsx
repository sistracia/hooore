import { Divider } from "./divider";
import { LinkButton } from "./link-button";
import {
  RelatedContentCard,
  RelatedContentCardProps,
} from "./related-content-card";

export type RelatedContentProps = {
  prevContent?: Omit<RelatedContentCardProps, "footer" | "className"> & {
    link?: string;
  };
  nextContent?: Omit<RelatedContentCardProps, "footer" | "className"> & {
    link?: string;
  };
  moreText?: string;
  moreLink?: string;
};

export function RelatedContent({
  prevContent,
  nextContent,
  moreText,
  moreLink,
}: RelatedContentProps) {
  return (
    <div className="ss-w-full">
      {prevContent && (
        <RelatedContentCard
          className="sm:ss-max-w-[650px]"
          {...prevContent}
          footer={
            prevContent.link && (
              <LinkButton href={prevContent.link}>Read This</LinkButton>
            )
          }
        />
      )}
      {prevContent && nextContent && (
        <Divider subtle={true} className="ss-my-10" height={1} />
      )}
      {nextContent && (
        <RelatedContentCard
          className="sm:ss-max-w-[650px]"
          {...nextContent}
          footer={
            nextContent.link && (
              <LinkButton href={nextContent.link}>Read This</LinkButton>
            )
          }
        />
      )}
      {moreText && moreLink && (
        <LinkButton href="/blog" className="ss-mt-12 sm:ss-mt-14">
          {moreText}
        </LinkButton>
      )}
    </div>
  );
}
