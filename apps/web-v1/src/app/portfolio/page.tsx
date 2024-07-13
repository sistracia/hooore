import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { SpotlightBackground } from "@/components/spotlight-background";
import { PortfolioCard } from "@/components/portfolio-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/pagination";
import { Divider } from "@/components/divider";
import { LinkButton } from "@/components/link-button";
import { Fragment } from "react";
import { getPortfolios } from "@/actions/portfolio";
import { OutlineText } from "@/components/outline-text";

export default async function PortfolioListPage() {
  const portfolios = await getPortfolios();

  return (
    <>
      <Hero
        background={
          <SpotlightBackground
            alt="Portfolio page hero background"
            spotlightAlt="Portfolio page hero background spotlight"
            src="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778310/hooore-web-profile/vintage-car.png"
            className="ss-h-full ss-w-full ss-object-cover ss-object-[center_65%] ss-opacity-25"
          />
        }
        header={<Chip>Case Study</Chip>}
        title={<OutlineText>Case Study</OutlineText>}
        description={
          <OutlineText>In-depth case studies of our past projects.</OutlineText>
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
