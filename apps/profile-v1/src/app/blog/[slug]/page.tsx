import { redirect } from "next/navigation";
import { Hero } from "@repo/components-v1/hero";
import { Chip } from "@repo/components-v1/chip";
import { Divider } from "@repo/components-v1/divider";
import { Content4 } from "@repo/components-v1/content4";
import { RelatedContent } from "@repo/components-v1/related-content";
import { ContentRenderer } from "@repo/components-v1/content-renderer";
import { getBlogSlugsAction, getBlogBySlugAction } from "@/actions/blog";
import { formatD_MMMM_YYYY } from "@/utils/date";
import { OutlineText } from "@repo/components-v1/outline-text";
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
        header={
          blog.tags.length !== 0
            ? blog.tags.map((tag, tagIndex) => {
                return <Chip key={tagIndex}>{tag}</Chip>;
              })
            : undefined
        }
        title={<OutlineText>{blog.title}</OutlineText>}
        description={<OutlineText>{blog.description}</OutlineText>}
        footer={
          <span className="ss-block ss-text-center ss-text-p sm:ss-text-left sm:ss-text-p-sm">
            {`${formatD_MMMM_YYYY(blog.published_date)} • ${blog.viewers} Viewers`}{" "}
          </span>
        }
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
              <LinkButton href="/blog" className="pc-mt-12 sm:pc-mt-14">
                See More Articles
              </LinkButton>
            }
            prevContent={
              blog && {
                title: blog.title,
                tags: blog.tags,
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
                tags: blog.tags,
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
