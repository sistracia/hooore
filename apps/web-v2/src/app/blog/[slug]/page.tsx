import { redirect } from "next/navigation";
import blogJSON from "../../data/blog.json";
import { Blog } from "@/types/blog";
import { Hero } from "@/components/hero";
import { Chip } from "@/components/chip";
import { Divider } from "@/components/divider";
import { Content4 } from "@/components/content4";
import { RelatedContent } from "@/components/related-content";

const blogs = blogJSON as Blog[];

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogIndex = blogs.findIndex((blog) => {
    return blog.slug === params.slug;
  });

  const prevBlog = blogs[blogIndex - 1];
  const blog = blogs[blogIndex];
  const nextBlog = blogs[blogIndex + 1];

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
        title={blog.title}
        description={blog.description}
        footer={
          <span className="ss-block ss-text-center sm:ss-text-left">
            {`${blog.published_date} • ${blog.viewers} Viewers`}{" "}
          </span>
        }
      />
      <Divider />
      <main></main>
      <Divider />
      <Content4
        align="left"
        title="Related Articles"
        content={
          <RelatedContent
            moreLink="/blog"
            moreText="See More Articles"
            prevContent={
              prevBlog && {
                title: prevBlog.title,
                tags: prevBlog.tags,
                meta: `${prevBlog.published_date} • ${prevBlog.viewers} Viewers`,
                thumbnailUrl: prevBlog.thumbnail_url,
                thumbnailAlt: prevBlog.thumbnail_alt,
                link: `/portfolio/${prevBlog.slug}`,
              }
            }
            nextContent={
              nextBlog && {
                title: nextBlog.title,
                tags: nextBlog.tags,
                meta: `${nextBlog.published_date} • ${nextBlog.viewers} Viewers`,
                thumbnailUrl: nextBlog.thumbnail_url,
                thumbnailAlt: nextBlog.thumbnail_alt,
                link: `/portfolio/${nextBlog.slug}`,
              }
            }
          />
        }
      />
    </>
  );
}
