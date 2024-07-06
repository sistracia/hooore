import { Chip } from "@/components/chip";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { SpotlightBackground } from "@/components/spotlight-background";
import blogJSON from "../data/blog.json";
import { Blog } from "@/types/blog";
import { BlogCard } from "@/components/blog-card";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/pagination";

const blogs = blogJSON as Blog[];

export default async function BlogListPage() {
  return (
    <>
      <Hero
        background={
          <SpotlightBackground
            alt="Blog page hero background"
            spotlightAlt="Blog page hero background spotlight"
            src="/vintage-newspaper.png"
            className="ss-h-full ss-w-full ss-object-cover ss-object-[center_65%] ss-opacity-25"
          />
        }
        header={<Chip>Blog</Chip>}
        title="Blog"
        description="Regularly updated blog with articles on industry trends, best practices, and company news."
      />
      <section className="ss-flex ss-h-[100px] ss-w-full ss-items-center ss-overflow-x-scroll ss-border-b-2 ss-px-4 ss-py-4 sm:ss-px-20 sm:ss-py-6">
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
      <main>
        {blogs.map((blog, blogIndex) => {
          return (
            <BlogCard
              key={blogIndex}
              title={blog.title}
              tags={blog.tags}
              description={blog.description}
              thumbnailUrl={blog.thumbnail_url}
              thumbnailAlt={blog.thumbnail_alt}
              meta={`${blog.published_date} • ${blog.viewers} Viewers`}
              className="ss-border-b-2 ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20"
              footer={
                <Link
                  href={`/blog/${blog.slug}`}
                  className="ss-flex ss-items-center ss-text-sm"
                >
                  Read More <ArrowRightIcon className="ss-ml-2 ss-h-4 ss-w-4" />
                </Link>
              }
            />
          );
        })}
      </main>
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
      <CTA />
    </>
  );
}
