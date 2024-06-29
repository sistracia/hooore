import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Content3 } from "@/components/content3";
import { Content4 } from "@/components/content4";
import { Hero } from "@/components/hero";
import { HoooreLogo } from "@/components/hooore-logo";
import { ServiceCard } from "@/components/service-card";
import { SimpleCard } from "@/components/simple-card";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Hero
        header={<Chip>About Us</Chip>}
        title={
          <>
            Welcome to <HoooreLogo className="ss-inline" />
          </>
        }
        descripption="At Hooore, we are passionate about delivering happiness through technology. We specialize in crafting exceptional applications, designing intuitive user interfaces and experiences, and empowering individuals and teams through comprehensive training and upskilling programs."
        background={
          <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/robot-team.png')] ss-bg-contain ss-bg-bottom ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale sm:ss-bg-cover sm:ss-bg-[center_65%]"></div>
        }
      />
      <Content3
        title="Hooore offers a wide range of services tailored to meet the diverse needs of our clients"
        footer={
          <div className="ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12">
            <ServiceCard
              thumbnailUrl="/rocket.png"
              thumbnailAlt="Software Development Logo"
              className="ss-flex-1 ss-bg-green-nyai-500"
              title="Software Development"
              description="Our expert team builds robust, scalable web applications that drive business growth and enhance user engagement."
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center ss-text-center sm:ss-w-fit"
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
              description="Our designers are dedicated to crafting intuitive and visually appealing interfaces that elevate user interactions and satisfaction."
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center ss-text-center sm:ss-w-fit"
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
              description="Committed to continuous improvement, we offer training programs designed to equip individuals and teams with the latest skills and knowledge in technology and agile methodologies."
              footer={
                <Button
                  variant="outline"
                  asChild
                  className="ss-justify-center ss-text-center sm:ss-w-fit"
                >
                  <Link href="/service/training-upskilling">Learn More</Link>
                </Button>
              }
            />
          </div>
        }
      />
      <Content4
        className="ss-border-t-2 ss-border-t-crema-cream-500"
        title="Our Commitment"
        description="Hooore is dedicated to ethical business practices, sustainability, and making a positive impact in the communities we serve. We believe in fostering long-term relationships built on trust, transparency, and mutual respect."
      />
      <Content4
        className="ss-border-t-2 ss-border-t-crema-cream-500"
        title="Why Choose Us?"
        footer={
          <div className="ss-flex ss-flex-col sm:ss-flex-row">
            <SimpleCard
              className="ss-flex-1 ss-bg-green-nyai-500"
              title="Expertise"
              description="With 5+ years of experience in the industry, our team brings deep technical expertise and creativity to every project."
            />
            <SimpleCard
              className="ss-flex-1 ss-bg-blue-clair-700"
              title="Innovation"
              description="We thrive on innovation, constantly exploring new technologies and approaches to deliver cutting-edge solutions."
            />
            <SimpleCard
              className="ss-flex-1 ss-bg-oranje-600"
              title="Customer-Centric"
              description="Our clients' success is our priority. We listen closely to their needs and goals, tailoring solutions that exceed expectations."
            />
          </div>
        }
      />
      <Content4
        className="ss-border-t-2 ss-border-t-crema-cream-500"
        title="Our Agile Approach"
        description={
          "At Hooore, agility is at the core of our operations. We embrace Agile methodologies to ensure flexibility, collaboration, and rapid delivery of high-quality solutions.\n\nBy iterating quickly and responding promptly to changes, we empower our clients to stay ahead in a dynamic environment."
        }
      />
      <div className="ss-border-t-2 ss-border-t-crema-cream-500 ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20">
        <p className="ss-whitespace-pre-line ss-text-center ss-text-xl sm:ss-text-3xl">
          Thank you for considering Hooore as our technology partner.{"\n"}
          Together, let&apos;s create a future where innovation meets happiness.
        </p>
      </div>
    </>
  );
}
