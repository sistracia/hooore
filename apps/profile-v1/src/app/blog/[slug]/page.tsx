import { redirect } from "next/navigation";
import { Hero } from "@repo/components-v1/hero";
import { Divider } from "@repo/components-v1/divider";
import { Content4 } from "@repo/components-v1/content4";
import { RelatedContent } from "@repo/components-v1/related-content";
import { ContentRenderer } from "@repo/components-v1/content-renderer";
import { getBlogSlugsAction, getBlogBySlugAction } from "@/actions/blog";
import { formatD_MMMM_YYYY } from "@/utils/date";
import { LinkButton } from "@/components/link-button";

export async function generateStaticParams() {
  return getBlogSlugsAction();
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlugAction(params.slug);

  if (!blog) {
    return redirect("/not-found");
  }

  return (
    <>
      <Hero
        tag={blog.tags.toString()}
        headline={blog.title}
        description={blog.description}
        meta={`${formatD_MMMM_YYYY(blog.published_date)} • ${blog.viewers} Viewers`}
      />
      <Divider />
      <main className="ss-overflow-scroll">
        <ContentRenderer contents={blog.contents} />
      </main>
      <Divider />
      <Content4
        align="left"
        title="Related Articles"
        content={
          <RelatedContent
            moreLink={
              <LinkButton href="/blog" className="ss-mt-12 sm:ss-mt-14">
                See More Articles
              </LinkButton>
            }
            prevContent={
              blog && {
                title: blog.title,
                tags: blog.tags.toString().split(","),
                meta: `${formatD_MMMM_YYYY(blog.published_date)} • ${blog.viewers} Viewers`,
                thumbnailUrl: blog.thumbnail_url,
                thumbnailAlt: blog.thumbnail_alt,
              }
            }
            prevContentLink={
              <LinkButton href={`/blog/${blog.slug}`}>Read This</LinkButton>
            }
            nextContent={
              blog && {
                title: blog.title,
                tags: blog.tags.toString().split(","),
                meta: `${formatD_MMMM_YYYY(blog.published_date)} • ${blog.viewers} Viewers`,
                thumbnailUrl: blog.thumbnail_url,
                thumbnailAlt: blog.thumbnail_alt,
              }
            }
            nextContentLink={
              <LinkButton href={`/blog/${blog.slug}`}>Read This</LinkButton>
            }
          />
        }
      />
    </>
  );
}
