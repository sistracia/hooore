import { Chip } from "@/components/chip";
import { Content2 } from "@/components/content2";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";

export default function ServicePage() {
  return (
    <>
      <Hero
        header={<Chip>Service</Chip>}
        title="Software Development"
        descripption="We create robust, scalable, and secure web applications tailored to meet our specific business needs. Our expertise spans across various technologies and frameworks, ensuring our web app is both functional and aesthetically pleasing."
        background={
          <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/rocket-launch.png')] ss-bg-cover ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale sm:ss-bg-contain sm:ss-bg-right"></div>
        }
      />
      <ServiceCard
        thumbnailUrl="/rocket.png"
        thumbnailAlt="Software Development Logo"
        className="ss-flex-1 ss-bg-black-mamba-500/25 ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20"
        direction="horizontal"
        items={[
          "Custom Web Applications",
          "Content Management Systems",
          "API Development and Integration",
        ]}
        footer={
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-6 sm:ss-justify-start">
            <img src="/javascript-logo.svg" alt="JavaScript Logo" />
            <img src="/typescript-logo.svg" alt="TypeScript Logo" />
            <img src="/html-logo.svg" alt="HTML Logo" />
            <img src="/css-logo.svg" alt="CSS Logo" />
            <img src="/reactjs-logo.svg" alt="React.js Logo" />
            <img src="/nextjs-logo.svg" alt="Next.js Logo" />
            <img src="/expressjs-logo.svg" alt="express.js Logo" />
            <img src="/postgre-logo.svg" alt="PostgreSQL Logo" />
            <img src="/shadcn-ui-logo.svg" alt="shadcn/ui Logo" />
          </div>
        }
      />
      <section>
        <Content2
          number={1}
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Discovery & Planning"
          items={[
            {
              title: "Initial Consultation",
              description:
                "Meet with the client to understand their business goals and requirements.",
            },
            {
              title: "Requirement Gathering",
              description:
                "Documenting detailed specifications and user stories.",
            },
            {
              title: "Project Planning",
              description:
                "Documenting detailed specifications and user stories.",
            },
          ]}
        />
        <Content2
          number={2}
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Design & Prototyping"
          items={[
            {
              title: "UI/UX Design",
              description:
                "Crafting visual designs that align with the client’s brand.",
            },
            {
              title: "Wireframing",
              description:
                "Developing wireframes to outline the structure and layout.",
            },
            {
              title: "Technical Design",
              description:
                "Designing architectural systems for robust, scalable, and secure applications",
            },
          ]}
        />
        <Content2
          number={3}
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Development"
          items={[
            {
              title: "Agile Sprints",
              description:
                "Developing the application in iterative sprints, with regular client reviews.",
            },
            {
              title: "Backend Development",
              description: "Building the server-side logic and database.",
            },
            {
              title: "Frontend Development",
              description:
                "Creating the client-side interface and interactions.",
            },
          ]}
        />
        <Content2
          number={4}
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Testing & Quality Assurance"
          items={[
            {
              title: "Unit Testing",
              description: "Testing individual components for functionality.",
            },
            {
              title: "Integration Testing",
              description: "Ensuring all components work together seamlessly.",
            },
            {
              title: "User Acceptance Testing (UAT)",
              description:
                "Gathering client feedback and making necessary adjustments.",
            },
          ]}
        />
        <Content2
          number={5}
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Deployment & Feedback"
          items={[
            {
              title: "Deployment",
              description:
                "Launching the web app to the production environment.",
            },
            {
              title: "Post-Launch Support",
              description: "Offering ongoing maintenance and updates.",
            },
            {
              title: "Training",
              description: "Providing client training on the new system.",
            },
          ]}
        />
      </section>
    </>
  );
}
