import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Content3 } from "@/components/content3";
import { Content4 } from "@/components/content4";
import { Hero } from "@/components/hero";
import { HoooreLogo } from "@/components/hooore-logo";
import { ServiceCard } from "@/components/service-card";
import { SimpleCard } from "@/components/simple-card";
import Link from "next/link";
import services from "../../data/services-list";
import { SpotlightBackground } from "@/components/spotlight-background";
import { Divider } from "@/components/divider";

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
        description="At Hooore, we are passionate about delivering happiness through technology. We specialize in crafting exceptional applications, designing intuitive user interfaces and experiences, and empowering individuals and teams through comprehensive training and upskilling programs."
        background={
          <SpotlightBackground
            alt="About us page hero background"
            spotlightAlt="About us page hero background spotlight"
            src="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778040/hooore-web-profile/robot-team.png"
            className="ss-h-full ss-w-full ss-object-contain ss-object-bottom ss-opacity-25 sm:ss-object-cover sm:ss-object-[center_65%]"
          />
        }
      />
      <Divider />
      <Content3
        title="Hooore offers a wide range of services tailored to meet the diverse needs of our clients"
        footer={
          <div className="ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12">
            {services.map(
              ({
                thumbnailUrl,
                thumbnailAlt,
                backgroundColor,
                title,
                description,
                link,
              }) => (
                <ServiceCard
                  key={title}
                  thumbnailUrl={thumbnailUrl}
                  thumbnailAlt={thumbnailAlt}
                  backgroundColor={backgroundColor}
                  className="ss-flex-1"
                  title={title}
                  description={description}
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
      <Divider />
      <Content4
        title="Our Commitment"
        description="Hooore is dedicated to ethical business practices, sustainability, and making a positive impact in the communities we serve. We believe in fostering long-term relationships built on trust, transparency, and mutual respect."
      />
      <Divider />
      <Content4
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
      <Divider />
      <Content4
        title="Our Agile Approach"
        description={
          "At Hooore, agility is at the core of our operations. We embrace Agile methodologies to ensure flexibility, collaboration, and rapid delivery of high-quality solutions.\n\nBy iterating quickly and responding promptly to changes, we empower our clients to stay ahead in a dynamic environment."
        }
      />
      <Divider />
      <section className="ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20">
        <p className="ss-whitespace-pre-line ss-text-center ss-text-xl sm:ss-text-3xl">
          Thank you for considering Hooore as our technology partner.{"\n"}
          Together, let&apos;s create a future where innovation meets happiness.
        </p>
      </section>
    </>
  );
}
