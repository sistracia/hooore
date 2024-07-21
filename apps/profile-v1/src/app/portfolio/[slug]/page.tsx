import { redirect } from "next/navigation";
import { CTA } from "@repo/components-v1/cta";
import { Hero } from "@repo/components-v1/hero";
import { Chip } from "@repo/components-v1/chip";
import { Divider } from "@repo/components-v1/divider";
import { Content4 } from "@repo/components-v1/content4";
import { RelatedContent } from "@repo/components-v1/related-content";
import { ContentRenderer } from "@repo/components-v1/content-renderer";
import { getPortfolioBySlugAction } from "@/actions/portfolio";
import { OutlineText } from "@repo/components-v1/outline-text";
import { LinkButton } from "@/components/link-button";

export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = await getPortfolioBySlugAction(params.slug);

  if (!portfolio) {
    return redirect("/not-found");
  }

  return (
    <>
      <Hero
        header={
          portfolio.tags.length !== 0
            ? portfolio.tags.map((tag, tagIndex) => {
                return <Chip key={tagIndex}>{tag}</Chip>;
              })
            : undefined
        }
        title={<OutlineText>{portfolio.title}</OutlineText>}
        description={<OutlineText>{portfolio.description}</OutlineText>}
      />
      <Divider />
      <main className="ss-overflow-scroll">
        <ContentRenderer contents={portfolio.contents} />
      </main>
      <Divider />
      <CTA />
      <Divider />
      <Content4
        align="left"
        title="Other Case Studies"
        content={
          <RelatedContent
            moreLink={
              <LinkButton href="/portfolio" className="pc-mt-12 sm:pc-mt-14">
                See More Case Studies More
              </LinkButton>
            }
            prevContent={
              portfolio && {
                title: portfolio.title,
                tags: portfolio.tags,
                thumbnailUrl: portfolio.thumbnail_url,
                thumbnailAlt: portfolio.thumbnail_alt,
              }
            }
            prevContentLink={
              <LinkButton href={`/portfolio/${portfolio.slug}`}>
                Read This
              </LinkButton>
            }
            nextContent={
              portfolio && {
                title: portfolio.title,
                tags: portfolio.tags,
                thumbnailUrl: portfolio.thumbnail_url,
                thumbnailAlt: portfolio.thumbnail_alt,
              }
            }
            nextContentLink={
              <LinkButton href={`/portfolio/${portfolio.slug}`}>
                Read This
              </LinkButton>
            }
          />
        }
      />
    </>
  );
}
