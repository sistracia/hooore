import { Chip } from "@repo/components-v1/chip";
import { CTA } from "@/components/cta";
import { Hero } from "@repo/components-v1/hero";
import { RadioGroup, RadioGroupItem } from "@repo/components-v1/radio-group";
import { SpotlightBackground } from "@repo/components-v1/spotlight-background";
import { BlogCard } from "@repo/components-v1/blog-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/components-v1/pagination";
import { Divider } from "@repo/components-v1/divider";
import { LinkButton } from "@/components/link-button";
import { Fragment } from "react";
import { getBlogsAction } from "@/actions/blog";
import { formatD_MMMM_YYYY } from "@/utils/date";
import { OutlineText } from "@repo/components-v1/outline-text";

export default async function BlogListPage() {
  const blogs = await getBlogsAction();

  return (
    <>
      <Hero
        background={
          <SpotlightBackground
            alt="Blog page hero background"
            spotlightAlt="Blog page hero background spotlight"
            src="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778321/hooore-web-profile/vintage-newspaper.png"
            className="ss-h-full ss-w-full ss-object-cover ss-object-[center_65%] ss-opacity-25"
          />
        }
        header={<Chip>Blog</Chip>}
        title={<OutlineText>Blog</OutlineText>}
        description={
          <OutlineText>
            Regularly updated blog with articles on industry trends, best
            practices, and company news.
          </OutlineText>
        }
      />
      <Divider />
      <section className="ss-flex ss-h-[100px] ss-w-full ss-items-center ss-overflow-x-scroll ss-px-4 ss-py-4 sm:ss-px-20 sm:ss-py-6">
        <RadioGroup
          id="category"
          name="category"
          defaultValue="all"
          className="ss-flex ss-w-full ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start"
        >
          <RadioGroupItem
            backgroundIndicator={true}
            className="ss-whitespace-nowrap"
            value="all"
          >
            All
          </RadioGroupItem>
          <RadioGroupItem
            backgroundIndicator={true}
            className="ss-whitespace-nowrap"
            value="industry_insights"
          >
            Industry Insights
          </RadioGroupItem>
          <RadioGroupItem
            backgroundIndicator={true}
            className="ss-whitespace-nowrap"
            value="tutorials_guides"
          >
            Tutorials & Guides
          </RadioGroupItem>
        </RadioGroup>
      </section>
      <Divider />
      <main>
        {blogs.map((blog, blogIndex) => {
          return (
            <Fragment key={blogIndex}>
              <BlogCard
                title={blog.title}
                tags={blog.tags}
                description={blog.description}
                thumbnailUrl={blog.thumbnail_url}
                thumbnailAlt={blog.thumbnail_alt}
                meta={`${formatD_MMMM_YYYY(blog.published_date)} • ${blog.viewers} Viewers`}
                className="ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20"
                footer={
                  <LinkButton href={`/blog/${blog.slug}`}>Read More</LinkButton>
                }
              />
              {blogIndex !== blogs.length - 1 && <Divider />}
            </Fragment>
          );
        })}
      </main>
      <Divider />
      <section className="ss-px-4 ss-py-4 sm:ss-px-20 sm:ss-py-6">
        <Pagination className="ss-justify-center sm:ss-justify-start">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
      <Divider />
      <CTA />
    </>
  );
}
