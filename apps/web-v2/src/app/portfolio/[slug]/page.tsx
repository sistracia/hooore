import { redirect } from "next/navigation";
import { CTA } from "@/components/cta";
import portfolioJSON from "../../data/portfolio.json";
import { Portfolio } from "@/types/portfolio";
import { Hero } from "@/components/hero";
import { Chip } from "@/components/chip";
import { Divider } from "@/components/divider";
import { Content4 } from "@/components/content4";
import { RelatedContent } from "@/components/related-content";

const portfolios = portfolioJSON as Portfolio[];

export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolioIndex = portfolios.findIndex((portfolio) => {
    return portfolio.slug === params.slug;
  });

  const prevPortfolio = portfolios[portfolioIndex - 1];
  const portfolio = portfolios[portfolioIndex];
  const nextPortfolio = portfolios[portfolioIndex + 1];

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
        title={portfolio.title}
        description={portfolio.description}
      />
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
              prevPortfolio && {
                title: prevPortfolio.title,
                tags: prevPortfolio.tags,
                thumbnailUrl: prevPortfolio.thumbnail_url,
                thumbnailAlt: prevPortfolio.thumbnail_alt,
                link: `/portfolio/${prevPortfolio.slug}`,
              }
            }
            nextContent={
              nextPortfolio && {
                title: nextPortfolio.title,
                tags: nextPortfolio.tags,
                thumbnailUrl: nextPortfolio.thumbnail_url,
                thumbnailAlt: nextPortfolio.thumbnail_alt,
                link: `/portfolio/${nextPortfolio.slug}`,
              }
            }
          />
        }
      />
    </>
  );
}
