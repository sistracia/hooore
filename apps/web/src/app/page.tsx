import { AirbnbLogo } from "@/components/airbnb-logo";
import { AmazonLogo } from "@/components/amazon-logo";
import { AsanaLogo } from "@/components/asana-logo";
import { EvernoteLogo } from "@/components/evernote-logo";
import { FramerLogo } from "@/components/framer-logo";
import { Section } from "@/components/section";
import { UpworkLogo } from "@/components/upwork-logo";
import {
  ArrowTopRightIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
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
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <header className="mx-[3vw] mb-10 flex w-[94vw] flex-col items-center sm:mx-[5vw] sm:w-[90vw] sm:items-start">
        <Button variant="text" inert asChild className="w-fit p-0">
          <Link href="/contact">
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
          <Link href="/contact">
            Hubungi Kami <ArrowTopRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </header>
      <div className="h-200px relative mx-[3vw] w-[94vw] rounded-t-3xl bg-ink-cumi-50 after:absolute after:block after:h-[200px] after:w-full after:bg-ink-cumi-50 after:content-[''] sm:mx-[5vw] sm:w-[90vw]">
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
      </div>
      <main className="relative mx-[3vw] flex w-[94vw] flex-col items-center justify-center sm:mx-[5vw] sm:w-[90vw]">
        <Section
          title="The Architects of Your Digital Transformation"
          description="Our talented engineers create shared value and mutual growth with a forward-thinking assessment and transformation of today’s digital landscape."
          className="mb-2"
          extra={
            <div className="flex w-full flex-col gap-6 sm:flex-row sm:gap-1">
              <div className="flex flex-1 items-start gap-4">
                <Image
                  src="/digital-product-icon.svg"
                  alt="Digital Product Icon"
                  width={32}
                  height={32}
                />
                <div>
                  <span className="text-ink-cumi-500">Digital Product</span>
                  <p className="text-xs text-ink-cumi-200 sm:text-base">
                    Lorem Ipsun Dolor Sit Amet
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-start gap-4">
                <Image
                  src="/software-development-icon.svg"
                  alt="Software Development Icon"
                  width={32}
                  height={32}
                />
                <div>
                  <span className="text-ink-cumi-500">
                    Software Development
                  </span>
                  <p className="text-xs text-ink-cumi-200 sm:text-base">
                    Lorem Ipsun Dolor Sit Amet
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-start gap-4">
                <Image
                  src="/training-upscaling-icon.svg"
                  alt="Training and Upscaling Icon"
                  width={32}
                  height={32}
                />
                <div>
                  <span className="text-ink-cumi-500">
                    Training & Upscaling
                  </span>
                  <p className="text-xs text-ink-cumi-200 sm:text-base">
                    Lorem Ipsun Dolor Sit Amet
                  </p>
                </div>
              </div>
            </div>
          }
        >
          <div className="flex w-full flex-col sm:flex-row">
            <div className="flex-1">
              <h3 className="mb-3 text-3xl sm:text-5xl">
                Training & Upscaling
              </h3>
              <p className="text-sm text-ink-cumi-300 sm:text-lg">
                Lorem Ipsun Dolor Sit Amet. Yada yadiii diidi uhuiii. Lorem
                Ipsun Dolor Sit Amet. Yada yadiii diidi uhuiiiLorem Ipsun Dolor
                Sit Amet.
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <Image
                src="/golden-apple.png"
                alt="Training and Upscaling Image"
                width={300}
                height={300}
              />
            </div>
          </div>
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
        >
          <div className="flex flex-col gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-cumi-500/20 text-2xl text-ink-cumi-500 sm:h-12 sm:w-12">
              1
            </span>
            <h3 className="text-xl text-ink-cumi-500">
              Meet your perfect match
            </h3>
            <p className="text-lg text-ink-cumi-300">
              Horey! manages the project, learns the intimate details of what
              your users want, and delivers impactful design iterations.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-cumi-500/20 text-2xl text-ink-cumi-500 sm:h-12 sm:w-12">
              2
            </span>
            <h3 className="text-xl text-ink-cumi-500">
              The first sprint begins{" "}
            </h3>
            <p className="text-lg text-ink-cumi-300">
              Horey! manages the project, learns the intimate details of what
              your users want, and delivers impactful design iterations.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-cumi-500/20 text-2xl text-ink-cumi-500 sm:h-12 sm:w-12">
              3
            </span>
            <h3 className="text-xl text-ink-cumi-500">The Magic Happen</h3>
            <p className="text-lg text-ink-cumi-300">
              Horey! manages the project, learns the intimate details of what
              your users want, and delivers impactful design iterations.
            </p>
          </div>
        </Section>
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
          <Accordion type="multiple" className="w-full">
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
      </main>
      <Footer
        className="mx-[3vw] w-[94vw] sm:mx-[5vw] sm:w-[90vw]"
        extra={
          <div className="flex flex-col items-center sm:items-start">
            <span className="mb-4 text-center text-4xl font-light text-ink-cumi-500 sm:text-left sm:text-6xl">
              Let&apos;s build
              <br />
              something awesome!
            </span>
            <span className="mb-10 text-center text-xl text-ink-cumi-200 sm:text-left">
              Try us for a month , if you don&apos;t love us, get your money
              back.
            </span>
            <Button asChild className="w-fit">
              <Link href="/contact">
                Hubungi Kami <ArrowTopRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        }
        links={
          <>
            <Button variant="text" asChild>
              <Link href="/">Beranda</Link>
            </Button>
            <Button variant="text" asChild>
              <Link href="/contact">Kontak</Link>
            </Button>
          </>
        }
        social={
          <>
            <Button variant="text" asChild>
              <a href="mailto:hi@hooore.com">
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> hi@hooore.com
              </a>
            </Button>
            <Button variant="text" asChild>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/hooore.in/"
              >
                <InstagramLogoIcon className="mr-2 h-4 w-4" /> hooore.in
              </a>
            </Button>
            <Button variant="text" asChild>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/company/hooore"
              >
                <LinkedInLogoIcon className="mr-2 h-4 w-4" /> in/hooore
              </a>
            </Button>
          </>
        }
      />
    </>
  );
}
