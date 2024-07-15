import { redirect } from "next/navigation";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Chip } from "@/components/chip";
import { Divider } from "@/components/divider";
import { Content4 } from "@/components/content4";
import { RelatedContent } from "@/components/related-content";
import { ContentRenderer } from "@/components/content-renderer";
import { getPortfolioBySlugAction } from "@/actions/portfolio";
import { OutlineText } from "@/components/outline-text";

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
            moreLink="/portfolio"
            moreText="See More Case Studies More"
            prevContent={
              portfolio && {
                title: portfolio.title,
                tags: portfolio.tags,
                thumbnailUrl: portfolio.thumbnail_url,
                thumbnailAlt: portfolio.thumbnail_alt,
                link: `/portfolio/${portfolio.slug}`,
              }
            }
            nextContent={
              portfolio && {
                title: portfolio.title,
                tags: portfolio.tags,
                thumbnailUrl: portfolio.thumbnail_url,
                thumbnailAlt: portfolio.thumbnail_alt,
                link: `/portfolio/${portfolio.slug}`,
              }
            }
          />
        }
      />
    </>
  );
}
