import { CallToAction } from "@repo/components-v1/call-to-action";
import { Hero } from "@repo/components-v1/hero";
import {
  RadioGroup,
  RadioGroupItem,
} from "@repo/components-v1/backup/radio-group";
import { BlogCard } from "@repo/components-v1/backup/blog-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/components-v1/backup/pagination";
import { Divider } from "@repo/components-v1/divider";
import { LinkButton } from "@/components/link-button";
import { Fragment } from "react";
import { getBlogsAction } from "@/backup-remove-later/actions/blog";
import { formatD_MMMM_YYYY } from "@/backup-remove-later/utils/date";

export default async function BlogListPage() {
  const blogs = await getBlogsAction();

  return (
    <>
      <Hero
        background="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778321/hooore-web-profile/vintage-newspaper.png"
        tag="Blog"
        headline="Blog"
        sub_headline="Regularly updated blog with articles on industry trends, best practices, and company news."
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
                tags={blog.tags.toString().split(",")}
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
      <CallToAction
        headline="Get Started Today!"
        description="Let's discuss your project and see how we can help you achieve your business goals."
        background="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778352/hooore-web-profile/work-together.png"
        cta_link="/contact-us"
        cta_button_label="Contact Us"
      />
    </>
  );
}
