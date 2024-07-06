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
import servicesList from "./data/services-list.json";
import faqJSON from "./data/faq.json";
import { Paragraph as ParagraphType } from "@/types/paragraph";
import { Paragraph } from "@/components/paragraph";
import { Fragment } from "react";
import { SpotlightBackground } from "@/components/spotlight-background";

const faqs = faqJSON as ParagraphType[];

export default function Home() {
  return (
    <BackgroundColor color="var(--black-mamba-400)">
      <Hero
        background={
          <SpotlightBackground
            alt="Home page hero background"
            spotlightAlt="Home page hero background spotlight"
            src="/sunrise.png"
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
      <section className="ss-flex ss-h-[100px] ss-w-full ss-items-center">
        <Marquee>
          {[
            { src: "/airbnb-logo.svg", alt: "Airbnb Logo" },
            { src: "/amazon-logo.svg", alt: "Amazon Logo" },
            { src: "/asana-logo.svg", alt: "Asana Logo" },
            { src: "/evernote-logo.svg", alt: "Evernote Logo" },
            { src: "/framer-logo.svg", alt: "Framer Logo" },
            { src: "/upwork-logo.svg", alt: "Upwork Logo" },
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
      <Content3
        className="ss-border-t-2 ss-border-t-crema-cream-500"
        header={<Chip>Services</Chip>}
        title="Where the joy meets technology."
        description="We believe in the power of innovation to bring happiness and excitement to our clients. Our mission is to deliver exceptional digital solutions that exceed expectations and inspire delight."
        footer={
          <div className="ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12">
            {servicesList.services.map(
              ({
                thumbnailUrl,
                thumbnailAlt,
                backgroundColor,
                title,
                items,
                link,
              }) => (
                <ServiceCard
                  key={title}
                  thumbnailUrl={thumbnailUrl}
                  thumbnailAlt={thumbnailAlt}
                  backgroundColor={backgroundColor}
                  className="ss-flex-1"
                  title={title}
                  items={items}
                  footer={
                    <Button
                      asChild
                      variant="outline"
                      className="ss-justify-center sm:ss-w-fit"
                    >
                      <Link href={link}>Learn More</Link>
                    </Button>
                  }
                />
              ),
            )}
          </div>
        }
      />
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
