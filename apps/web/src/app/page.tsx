import { AirbnbLogo } from "@/components/airbnb-logo";
import { AmazonLogo } from "@/components/amazon-logo";
import { AsanaLogo } from "@/components/asana-logo";
import { EvernoteLogo } from "@/components/evernote-logo";
import { FramerLogo } from "@/components/framer-logo";
import { ScrollContainer } from "@/components/scroll-container";
import { Section } from "@/components/section";
import { Spacer } from "@/components/spacer";
import { UpworkLogo } from "@/components/upwork-logo";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "@repo/component/button";
import { Marquee } from "@repo/component/marquee";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/component/accordion";

export default function Page() {
  return (
    <ScrollContainer>
      <Spacer
        as="header"
        className="mb-10 flex flex-col items-center sm:items-start"
      >
        <Button variant="text" inert asChild className="w-fit p-0">
          <Link href="/">
            We can help <ArrowTopRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <p className="mb-10 text-center text-ink-cumi-200 sm:text-left">
          <span className="block">Startups and enterprises</span>
          <span className="block">design digital products that just work.</span>
        </p>
        <h1 className="mb-10 text-center text-6xl font-light text-ink-cumi-500 sm:text-left sm:text-8xl">
          Lorem ipsum dolor Yada yadiii diidi uhuiii,{" "}
          <span className="text-yellow-pisangambon-500">Sit Amet</span>
        </h1>
        <Button asChild className="w-fit">
          <Link href="/">
            Hubungi Kami <ArrowTopRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Spacer>
      <Spacer className="h-200px relative rounded-t-3xl bg-ink-cumi-50 after:absolute after:block after:h-[200px] after:w-full after:bg-ink-cumi-50 after:content-['']">
        <Marquee className="w-full py-2 sm:py-6" display={6}>
          <span className="h-[33px] w-[106px] px-2">
            <AirbnbLogo
              alt="Airbnb Logo"
              width={150}
              height={50}
              className="h-full w-full"
            />
          </span>
          <span className="h-[33px] w-[106px] px-2">
            <AmazonLogo
              alt="Amazon Logo"
              width={150}
              height={50}
              className="h-full w-full"
            />
          </span>
          <span className="h-[33px] w-[106px] px-2">
            <AsanaLogo
              alt="Asana Logo"
              width={150}
              height={50}
              className="h-full w-full"
            />
          </span>
          <span className="h-[33px] w-[106px] px-2">
            <EvernoteLogo
              alt="Evernote Logo"
              width={150}
              height={50}
              className="h-full w-full"
            />
          </span>
          <span className="h-[33px] w-[106px] px-2">
            <FramerLogo
              alt="Framer Logo"
              width={150}
              height={50}
              className="h-full w-full"
            />
          </span>
          <span className="h-[33px] w-[106px] px-2">
            <UpworkLogo
              alt="Upwork Logo"
              width={150}
              height={50}
              className="h-full w-full"
            />
          </span>
        </Marquee>
      </Spacer>
      <Spacer
        as="main"
        className="lg relative flex flex-col items-center justify-center"
      >
        <Section
          title="The Architects of Your Digital Transformation"
          description="Our talented engineers create shared value and mutual growth with a forward-thinking assessment and transformation of today’s digital landscape."
          className="mb-2"
        >
          <div className="flex-1">
            <h3 className="mb-3 text-3xl sm:text-5xl">Training & Upscaling</h3>
            <p className="text-sm text-ink-cumi-300 sm:text-lg">
              Lorem Ipsun Dolor Sit Amet. Yada yadiii diidi uhuiii. Lorem Ipsun
              Dolor Sit Amet. Yada yadiii diidi uhuiiiLorem Ipsun Dolor Sit
              Amet.
            </p>
          </div>
          <Image
            src="/golden-apple.png"
            alt="Training and Upscaling Image"
            width={500}
            height={500}
            className="flex-1"
          />
        </Section>
        <Section
          title={
            <>
              How to huddle up <br />
              with Us
            </>
          }
          description="Lorem Ipsun Dolor Sit Amet. Yada yadiii diidi uhuiii. Lorem Ipsun Dolor Sit Amet. Yada yadiii diidi uhuiiiLorem Ipsun Dolor Sit Amet."
          className="mb-2"
        ></Section>
        <Section
          title={
            <>
              Question?
              <br />
              Some Answers
            </>
          }
          description="Still have any question? Feel free to reach out hey@horey.com"
          layout="horiozontal"
          className="mb-2"
        >
          <Accordion type="multiple">
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
                some character. Make it special. I was blessed with a very
                steady hand; and it comes in very handy when you&apos;re doing
                these little delicate things.
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
                some character. Make it special. I was blessed with a very
                steady hand; and it comes in very handy when you&apos;re doing
                these little delicate things.
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
                some character. Make it special. I was blessed with a very
                steady hand; and it comes in very handy when you&apos;re doing
                these little delicate things.
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
                some character. Make it special. I was blessed with a very
                steady hand; and it comes in very handy when you&apos;re doing
                these little delicate things.
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
                some character. Make it special. I was blessed with a very
                steady hand; and it comes in very handy when you&apos;re doing
                these little delicate things.
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
                some character. Make it special. I was blessed with a very
                steady hand; and it comes in very handy when you&apos;re doing
                these little delicate things.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>
      </Spacer>
    </ScrollContainer>
  );
}
