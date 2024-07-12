import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Content3 } from "@/components/content3";
import { Content4 } from "@/components/content4";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ServiceCard } from "@/components/service-card";
import { SocialMediaLinks } from "@/components/social-media-links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import Link from "next/link";
import { BackgroundColor } from "@/components/background-color";
import { Paragraph } from "@/components/paragraph";
import { Fragment } from "react";
import { SpotlightBackground } from "@/components/spotlight-background";
import { Divider } from "@/components/divider";
import { getFaqs } from "@/actions/faq";
import { getServices } from "@/actions/service";

export default async function Home() {
  const faqs = await getFaqs();
  const services = await getServices();

  return (
    <BackgroundColor color="var(--black-mamba-400)">
      <Hero
        background={
          <SpotlightBackground
            alt="Home page hero background"
            spotlightAlt="Home page hero background spotlight"
            src="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778245/hooore-web-profile/sunrise.png"
            className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-object-cover ss-object-[center_65%] ss-opacity-25"
          />
        }
        header={<span className="ss-text-2xl">Hooore /ho·re/ /horé/</span>}
        title={"Turning Tech Dreams\ninto Happy Realities"}
        footer={
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-x-6 sm:ss-justify-start">
            <SocialMediaLinks />
          </div>
        }
      />
      <Divider />
      <section className="ss-flex ss-h-[100px] ss-w-full ss-items-center ss-py-4 sm:ss-h-[160px] sm:ss-py-6">
        <Marquee>
          {[
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720798476/hooore-web-profile/kargo-logo.svg",
              alt: "Kargo Tech Logo",
            },
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720798475/hooore-web-profile/celerates-logo.svg",
              alt: "Celerates Logo",
            },
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720798475/hooore-web-profile/bizzy-logo.svg",
              alt: "Bizzy Logo",
            },
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720798476/hooore-web-profile/kompas-logo.svg",
              alt: "Kompas Gramedia Logo",
            },
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720798476/hooore-web-profile/efishery-logo.svg",
              alt: "eFishery Logo",
            },
          ].map((logo, logoIndex) => {
            return (
              <img
                src={logo.src}
                key={logoIndex}
                alt={logo.alt}
                width={150}
                height={50}
                className="ss-h-full ss-w-full"
              />
            );
          })}
        </Marquee>
      </section>
      <Divider />
      <Content3
        header={<Chip>Services</Chip>}
        title="Where the joy meets technology."
        description="We believe in the power of innovation to bring happiness and excitement to our clients. Our mission is to deliver exceptional digital solutions that exceed expectations and inspire delight."
        footer={
          <div className="ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12">
            {services.map(
              ({
                thumbnail_url,
                thumbnail_alt,
                background_color,
                title,
                items,
                slug,
              }) => (
                <ServiceCard
                  key={title}
                  thumbnailUrl={thumbnail_url}
                  thumbnailAlt={thumbnail_alt}
                  backgroundColor={`rgb(${background_color})`}
                  className="ss-flex-1"
                  title={title}
                  items={items}
                  footer={
                    <Button
                      asChild
                      variant="outline"
                      className="ss-justify-center sm:ss-w-fit"
                    >
                      <Link href={`/service/${slug}`}>Learn More</Link>
                    </Button>
                  }
                />
              ),
            )}
          </div>
        }
      />
      <Divider />
      <CTA />
      <Content4
        header={<Chip>FAQ</Chip>}
        title="Questions and Some Answers"
        pushContent={false}
        footer={
          <p className="ss-text-center ss-text-xl sm:ss-text-left">
            Still have any question? Feel free to reach out hi@hooore.com
          </p>
        }
        content={
          <Accordion type="single" collapsible>
            {faqs.map((faq, faqIndex) => {
              return (
                <AccordionItem key={faqIndex} value={faqIndex.toString()}>
                  <AccordionTrigger>{faq.title}</AccordionTrigger>
                  <AccordionContent>
                    <Paragraph as={Fragment} contents={faq.contents} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        }
      />
    </BackgroundColor>
  );
}
