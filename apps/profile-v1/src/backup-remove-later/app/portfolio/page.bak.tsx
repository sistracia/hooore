import { Hero } from "@repo/components-v1/hero";
import {
  RadioGroup,
  RadioGroupItem,
} from "@repo/components-v1/backup/radio-group";
import { PortfolioCard } from "@repo/components-v1/backup/portfolio-card";
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
import { getPortfoliosAction } from "@/backup-remove-later/actions/portfolio";

export default async function PortfolioListPage() {
  const portfolios = await getPortfoliosAction();

  return (
    <>
      <Hero
        background="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778310/hooore-web-profile/vintage-car.png"
        tag="Case Study"
        headline="Case Study"
        description="In-depth case studies of our past projects."
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
            value="website"
          >
            Website
          </RadioGroupItem>
          <RadioGroupItem
            backgroundIndicator={true}
            className="ss-whitespace-nowrap"
            value="app"
          >
            App
          </RadioGroupItem>
        </RadioGroup>
      </section>
      <Divider />
      <main>
        {portfolios.map((portfolio, portfolioIndex) => {
          return (
            <Fragment key={portfolioIndex}>
              <PortfolioCard
                title={portfolio.title}
                tags={portfolio.tags}
                thumbnailUrl={portfolio.thumbnail_url}
                thumbnailAlt={portfolio.thumbnail_alt}
                className="ss-mx-4 ss-my-10 sm:ss-mx-20 sm:ss-my-20"
                footer={
                  <LinkButton href={`/portfolio/${portfolio.slug}`}>
                    Read More
                  </LinkButton>
                }
              />
              {portfolioIndex !== portfolios.length - 1 && <Divider />}
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
    </>
  );
}
