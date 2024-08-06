import { redirect } from "next/navigation";
import { CallToAction } from "@repo/components-v1/call-to-action";
import { Hero } from "@repo/components-v1/hero";
import { Divider } from "@repo/components-v1/divider";
import { Content4 } from "@repo/components-v1/backup/content4";
import { RelatedContent } from "@repo/components-v1/backup/related-content";
import { BlogRenderer } from "@repo/components-v1/backup/blog-renderer";
import {
  getPortfolioSlugsAction,
  getPortfolioBySlugAction,
} from "@/backup-remove-later/actions/portfolio";
import { LinkButton } from "@/backup-remove-later/components/link-button";

export async function generateStaticParams() {
  return getPortfolioSlugsAction();
}

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
        tag={portfolio.tags.toString()}
        headline={portfolio.title}
        description={portfolio.description}
      />
      <Divider />
      <main className="ss-overflow-scroll">
        <BlogRenderer contents={portfolio.contents} />
      </main>
      <Divider />
      <CallToAction />
      <Divider />
      <Content4
        align="left"
        title="Other Case Studies"
        content={
          <RelatedContent
            moreLink={
              <LinkButton href="/portfolio" className="ss-mt-12 sm:ss-mt-14">
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
