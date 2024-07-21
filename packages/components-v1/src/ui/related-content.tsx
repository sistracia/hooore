import { Divider } from "./divider";
import {
  RelatedContentCard,
  RelatedContentCardProps,
} from "./related-content-card";

export type RelatedContentProps = {
  prevContentLink?: React.ReactNode;
  prevContent?: Omit<RelatedContentCardProps, "footer" | "className">;
  nextContentLink?: React.ReactNode;
  nextContent?: Omit<RelatedContentCardProps, "footer" | "className">;
  moreLink?: React.ReactNode;
};

export function RelatedContent({
  prevContentLink,
  prevContent,
  nextContentLink,
  nextContent,
  moreLink,
}: RelatedContentProps) {
  return (
    <div className="pc-w-full">
      {prevContent && (
        <RelatedContentCard
          className="sm:pc-max-w-[650px]"
          {...prevContent}
          footer={prevContentLink}
          //   <LinkButton href={prevContent.link}>Read This</LinkButton>
        />
      )}
      {prevContent && nextContent && (
        <Divider subtle={true} className="pc-my-10" height={1} />
      )}
      {nextContent && (
        <RelatedContentCard
          className="sm:pc-max-w-[650px]"
          {...nextContent}
          footer={nextContentLink}
          //   <LinkButton href={nextContent.link}>Read This</LinkButton>
        />
      )}
      {moreLink}
    </div>
  );
}
