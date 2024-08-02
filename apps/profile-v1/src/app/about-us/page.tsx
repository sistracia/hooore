import { Button } from "@repo/components-v1/button";
import { Content3X } from "@repo/components-v1/content3x";
import { Content3 } from "@repo/components-v1/content-3";
import { Content4 } from "@repo/components-v1/content4";
import { Hero } from "@repo/components-v1/hero";
import { ServiceCard } from "@repo/components-v1/service-card";
import { SimpleCard } from "@repo/components-v1/simple-card";
import Link from "next/link";
import { Divider } from "@repo/components-v1/divider";
import { getServicesAction } from "@/actions/service";

export default async function AboutUs() {
  const services = await getServicesAction();

  return (
    <>
      <Hero
        tag="About Us"
        headline="Welcome to Hooore"
        description="At Hooore, we are passionate about delivering happiness through technology. We specialize in crafting exceptional applications, designing intuitive user interfaces and experiences, and empowering individuals and teams through comprehensive training and upskilling programs."
        background="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778040/hooore-web-profile/robot-team.png"
      />
      <Divider />
      <Content3X
        title="Hooore offers a wide range of services tailored to meet the diverse needs of our clients"
        footer={
          <div className="ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12">
            {services.map(
              ({
                thumbnail_url,
                thumbnail_alt,
                background_color,
                title,
                description,
                slug,
              }) => (
                <ServiceCard
                  key={title}
                  thumbnailUrl={thumbnail_url}
                  thumbnailAlt={thumbnail_alt}
                  backgroundColor={`rgb(${background_color})`}
                  className="ss-flex-1"
                  title={title}
                  description={description}
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
      <Content4
        title="Our Commitment"
        description="Hooore is dedicated to ethical business practices, sustainability, and making a positive impact in the communities we serve. We believe in fostering long-term relationships built on trust, transparency, and mutual respect."
      />
      <Divider />
      <Content4
        title="Why Choose Us?"
        footer={
          <div className="ss-flex ss-flex-col ss-overflow-hidden ss-rounded-lg sm:ss-flex-row">
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
      <Content3
        description={`Thank you for considering Hooore as our technology partner.\nTogether, let's create a future where innovation meets happiness.`}
      />
    </>
  );
}
