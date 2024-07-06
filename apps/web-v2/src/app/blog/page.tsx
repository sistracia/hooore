import { Chip } from "@/components/chip";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { SpotlightBackground } from "@/components/spotlight-background";

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
      <section className="ss-flex ss-h-[100px] ss-w-full ss-items-center ss-overflow-x-scroll">
        <RadioGroup
          id="category"
          name="category"
          defaultValue="all"
          className="ss-mx-4 ss-my-4 ss-flex ss-w-full ss-items-center ss-gap-3 sm:ss-mx-20 sm:ss-my-6 sm:ss-flex-row sm:ss-justify-start"
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
      <CTA />
    </>
  );
}
