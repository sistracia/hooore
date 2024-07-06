import { redirect } from "next/navigation";
import { CTA } from "@/components/cta";
import portfolioJSON from "../../data/portfolio.json";
import { Portfolio } from "@/types/portfolio";
import { Hero } from "@/components/hero";
import { Chip } from "@/components/chip";

const portfolios = portfolioJSON as Portfolio[];

export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = portfolios.find((portfolio) => {
    return portfolio.slug === params.slug;
  });

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
      <CTA />
    </>
  );
}
