import { AirbnbLogo } from "@/components/airbnb-logo";
import { AmazonLogo } from "@/components/amazon-logo";
import { AsanaLogo } from "@/components/asana-logo";
import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Content3 } from "@/components/content3";
import { Content4 } from "@/components/content4";
import { CTA } from "@/components/cta";
import { EvernoteLogo } from "@/components/evernote-logo";
import { FramerLogo } from "@/components/framer-logo";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ServiceCard } from "@/components/service-card";
import { SocialMediaLinks } from "@/components/social-media-links";
import { UpworkLogo } from "@/components/upwork-logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

import Link from "next/link";
import { BackgroundColor } from "@/components/background-color";

export default function Home() {
  return (
    <BackgroundColor color="var(--black-mamba-400)">
      <Hero
        background={
          <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/sunrise.png')] ss-bg-cover ss-bg-[center_65%] ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale"></div>
        }
        header={<span className="ss-text-2xl">Hooore /ho·re/ /horé/</span>}
        title={"Turning Tech Dreams\ninto Happy Realities"}
        footer={
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-x-6 sm:ss-justify-start">
            <SocialMediaLinks />
          </div>
        }
      />
      <div className="ss-h-200px ss-py-6">
        <Marquee className="w-full py-2 sm:py-6" display={6}>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <AirbnbLogo
              alt="Airbnb Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <AmazonLogo
              alt="Amazon Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <AsanaLogo
              alt="Asana Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <EvernoteLogo
              alt="Evernote Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <FramerLogo
              alt="Framer Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
          <span className="ss-h-[33px] ss-w-[106px] ss-px-2">
            <UpworkLogo
              alt="Upwork Logo"
              width={150}
              height={50}
              className="ss-h-full ss-w-full"
            />
          </span>
        </Marquee>
      </div>
      <Content3
        className="ss-border-t-2 ss-border-t-crema-cream-500"
        header={<Chip>Services</Chip>}
        title="Where the joy meets technology."
        description="We believe in the power of innovation to bring happiness and excitement to our clients. Our mission is to deliver exceptional digital solutions that exceed expectations and inspire delight."
        footer={
          <div className="ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12">
            <ServiceCard
              thumbnailUrl="/rocket.png"
              thumbnailAlt="Software Development Logo"
              className="ss-flex-1 ss-bg-green-nyai-500"
              title="Software Development"
              items={[
                "Custom Web Applications",
                "Content Management Systems",
                "API Development and Integration",
              ]}
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center sm:ss-w-fit"
                >
                  <Link href="/service/software-development">Learn More</Link>
                </Button>
              }
            />
            <ServiceCard
              thumbnailUrl="/wand.png"
              thumbnailAlt="UI/UX Design Logo"
              className="ss-flex-1 ss-bg-blue-clair-700"
              title="UI/UX Design"
              items={["Website & App Design", "User Research and Analysis"]}
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center sm:ss-w-fit"
                >
                  <Link href="/service/ui-ux-design">Learn More</Link>
                </Button>
              }
            />
            <ServiceCard
              thumbnailUrl="/apple.png"
              thumbnailAlt="Training & Upskilling Logo"
              className="ss-flex-1 ss-bg-oranje-600"
              title="Training & Upskilling"
              items={["Web Development Bootcamps", "UI/UX Design Courses"]}
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center sm:ss-w-fit"
                >
                  <Link href="/service/training-upskilling">Learn More</Link>
                </Button>
              }
            />
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
            Still have any question? Feel free to reach out hey@hooorey.com
          </p>
        }
        content={
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How we think?</AccordionTrigger>
              <AccordionContent>
                Think about a cloud. Just float around and be there. Decide
                where your cloud lives. Maybe he lives right in here. Let&apos;s
                put some highlights on these little trees. The sun wouldn&apos;t
                forget them. Let the paint work. This present moment is perfect
                simply due to the fact you&apos;re experiencing it. These things
                happen automatically. All you have to do is just let them
                happen. Here we&apos;re limited by the time we have. We&apos;ll
                take a little bit of Van Dyke Brown. You want your tree to have
                some character.
                {"\n\n"}Make it special. I was blessed with a very steady hand;
                and it comes in very handy when you&apos;re doing these little
                delicate things.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                These things happen automatically?
              </AccordionTrigger>
              <AccordionContent>
                Think about a cloud. Just float around and be there. Decide
                where your cloud lives. Maybe he lives right in here. Let&apos;s
                put some highlights on these little trees. The sun wouldn&apos;t
                forget them. Let the paint work. This present moment is perfect
                simply due to the fact you&apos;re experiencing it. These things
                happen automatically. All you have to do is just let them
                happen. Here we&apos;re limited by the time we have. We&apos;ll
                take a little bit of Van Dyke Brown. You want your tree to have
                some character.
                {"\n\n"}Make it special. I was blessed with a very steady hand;
                and it comes in very handy when you&apos;re doing these little
                delicate things.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                All you have to do is just let them happen?
              </AccordionTrigger>
              <AccordionContent>
                Think about a cloud. Just float around and be there. Decide
                where your cloud lives. Maybe he lives right in here. Let&apos;s
                put some highlights on these little trees. The sun wouldn&apos;t
                forget them. Let the paint work. This present moment is perfect
                simply due to the fact you&apos;re experiencing it. These things
                happen automatically. All you have to do is just let them
                happen. Here we&apos;re limited by the time we have. We&apos;ll
                take a little bit of Van Dyke Brown. You want your tree to have
                some character.
                {"\n\n"}Make it special. I was blessed with a very steady hand;
                and it comes in very handy when you&apos;re doing these little
                delicate things.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                The only thing worse than yellow snow is green snow ?
              </AccordionTrigger>
              <AccordionContent>
                Think about a cloud. Just float around and be there. Decide
                where your cloud lives. Maybe he lives right in here. Let&apos;s
                put some highlights on these little trees. The sun wouldn&apos;t
                forget them. Let the paint work. This present moment is perfect
                simply due to the fact you&apos;re experiencing it. These things
                happen automatically. All you have to do is just let them
                happen. Here we&apos;re limited by the time we have. We&apos;ll
                take a little bit of Van Dyke Brown. You want your tree to have
                some character.
                {"\n\n"}Make it special. I was blessed with a very steady hand;
                and it comes in very handy when you&apos;re doing these little
                delicate things.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                But we&apos;re not there yet, so we don&apos;t need to worry
                about it?
              </AccordionTrigger>
              <AccordionContent>
                Think about a cloud. Just float around and be there. Decide
                where your cloud lives. Maybe he lives right in here. Let&apos;s
                put some highlights on these little trees. The sun wouldn&apos;t
                forget them. Let the paint work. This present moment is perfect
                simply due to the fact you&apos;re experiencing it. These things
                happen automatically. All you have to do is just let them
                happen. Here we&apos;re limited by the time we have. We&apos;ll
                take a little bit of Van Dyke Brown. You want your tree to have
                some character.
                {"\n\n"}Make it special. I was blessed with a very steady hand;
                and it comes in very handy when you&apos;re doing these little
                delicate things.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                There&apos;s nothing wrong with having a tree as a friend.?
              </AccordionTrigger>
              <AccordionContent>
                Think about a cloud. Just float around and be there. Decide
                where your cloud lives. Maybe he lives right in here. Let&apos;s
                put some highlights on these little trees. The sun wouldn&apos;t
                forget them. Let the paint work. This present moment is perfect
                simply due to the fact you&apos;re experiencing it. These things
                happen automatically. All you have to do is just let them
                happen. Here we&apos;re limited by the time we have. We&apos;ll
                take a little bit of Van Dyke Brown. You want your tree to have
                some character.
                {"\n\n"}Make it special. I was blessed with a very steady hand;
                and it comes in very handy when you&apos;re doing these little
                delicate things.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        }
      />
    </BackgroundColor>
  );
}
