import { Button } from "@repo/components-v1/button";
import { Chip } from "@repo/components-v1/chip";
import { Content3 } from "@repo/components-v1/content3";
import { Content4 } from "@repo/components-v1/content4";
import { CTA } from "@/components/cta";
import { Hero } from "@repo/components-v1/hero";
import { Marquee } from "@repo/components-v1/marquee";
import { ServiceCard } from "@repo/components-v1/service-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/components-v1/accordion";
import Link from "next/link";
import { BackgroundColor } from "@/components/background-color";
import { Paragraph } from "@repo/components-v1/paragraph";
import { Fragment } from "react";
import { Divider } from "@repo/components-v1/divider";
import { getFaqsAction } from "@/actions/faq";
import { getServicesAction } from "@/actions/service";

export default async function Home() {
  const faqs = await getFaqsAction();
  const services = await getServicesAction();

  return (
    <BackgroundColor color="var(--black-mamba-400)">
      <Hero
        background="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778245/hooore-web-profile/sunrise.png"
        sub_headline="Hooore /ho·re/ /horé/"
        headline={`Turning Tech Dreams\ninto Happy Realities`}
        socials={[
          {
            base_url: "mailto:",
            enabled: true,
            username: "hi@hooore.com",
          },
          {
            base_url: "https://www.instagram.com/",
            enabled: true,
            username: "hooore.in",
          },
          {
            base_url: "https://www.linkedin.com/company/",
            enabled: true,
            username: "hooore",
          },
        ]}
      />
      <Divider />
      <section className="ss-flex ss-h-[100px] ss-w-full ss-items-center ss-py-4 sm:ss-h-[160px] sm:ss-py-6">
        <Marquee width="350px">
          {[
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1721815047/hooore-web-profile/kargo-logo.png",
              alt: "Kargo Tech Logo",
            },
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1721815101/hooore-web-profile/celerates-logo.png",
              alt: "Celerates Logo",
            },
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1721815155/hooore-web-profile/bizzy-logo.png",
              alt: "Bizzy Logo",
            },
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1721815118/hooore-web-profile/kompas-logo.png",
              alt: "Kompas Gramedia Logo",
            },
            {
              src: "https://res.cloudinary.com/dcej6w6ct/image/upload/v1721815135/hooore-web-profile/efishery-logo.png",
              alt: "eFishery Logo",
            },
          ].map((logo, logoIndex) => {
            return (
              <div
                key={logoIndex}
                className="ss-flex ss-h-full ss-items-center ss-justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="ss-h-full ss-object-contain"
                />
              </div>
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
          <p className="ss-text-center ss-text-p sm:ss-text-p-sm">
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
