import { redirect } from "next/navigation";
import blogJSON from "../../data/blog.json";
import { Blog } from "@/types/blog";
import { Hero } from "@/components/hero";
import { Chip } from "@/components/chip";

const blogs = blogJSON as Blog[];

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((blog) => {
    return blog.slug === params.slug;
  });

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
    </>
  );
}
