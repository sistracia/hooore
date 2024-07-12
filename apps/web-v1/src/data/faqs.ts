import type { Paragraph } from "@/types/paragraph";

const faqs: Paragraph[] = [
  {
    title: "What services does Hooore offer?",
    contents: [
      {
        paragraph:
          "At Hooore, we specialize in web app development, mobile app development, UI/UX design, and training and upskilling programs. Our team is dedicated to delivering robust and scalable solutions tailored to meet your business needs.",
      },
    ],
  },
  {
    title: "How much experience does Hooore have?",
    contents: [
      {
        paragraph:
          "Although Hooore is a new company, our team brings over 5 years of collective experience in the technology industry. We leverage this expertise to provide high-quality and innovative solutions to our clients.",
      },
    ],
  },
  {
    title: "What technologies do you use for development?",
    contents: [
      {
        paragraph:
          "Our tech stack includes JavaScript, TypeScript, HTML, CSS, React JS, Next JS, Node JS, Express JS, PostgreSQL, and Shacdn UI. We choose the best tools and frameworks to ensure your project is efficient, scalable, and maintainable.",
      },
    ],
  },
  {
    title: "What is the process for starting a new project with Hooore?",
    contents: [
      {
        paragraph: "Our process typically includes the following steps:",
        list: {
          type: "ordered",
          items: [
            "Initial Consultation: We meet with you to understand your business goals and requirements.",
            "Requirement Gathering: We document detailed specifications and user stories.",
            "Project Planning: We create a project roadmap with timelines and milestones.",
            "Design and Development: We follow Agile methodologies to develop your solution iteratively, with regular client reviews.",
            "Testing and Deployment: We conduct thorough testing before launching your project to ensure it meets all quality standards.",
          ],
        },
      },
    ],
  },
  {
    title: "How do you ensure the quality of your web and mobile apps?",
    contents: [
      {
        paragraph:
          "Quality assurance is integral to our process. We perform unit testing, integration testing, and user acceptance testing (UAT) to ensure all components work seamlessly. Additionally, we gather client feedback during the UAT phase to make necessary adjustments before deployment.",
      },
    ],
  },
  {
    title: "Can you help with UI/UX design only?",
    contents: [
      {
        paragraph:
          "Yes, we offer standalone UI/UX design services. Our design team will work with you to create intuitive and engaging interfaces that align with your brand and enhance user experience.",
      },
    ],
  },
  {
    title: "How do you handle post-launch support and maintenance?",
    contents: [
      {
        paragraph:
          "We provide ongoing maintenance and updates to ensure your application remains secure, functional, and up-to-date with the latest technologies. Our support team is always available to address any issues or enhancements needed post-launch.",
      },
    ],
  },
  {
    title: "What is Agile methodology and how does Hooore implement it?",
    contents: [
      {
        paragraph:
          "Agile methodology is an iterative approach to project management and software development that promotes flexibility, collaboration, and customer feedback. At Hooore, we implement Agile by breaking the project into small, manageable sprints, allowing us to deliver parts of the project incrementally and adapt quickly to changes.",
      },
    ],
  },
  {
    title: "How can I get started with Hooore?",
    contents: [
      {
        paragraph:
          "Getting started is easy! Simply contact us through our website, phone, or email to schedule an initial consultation. We’ll discuss your project needs and provide a tailored solution to help you achieve your business goals.",
      },
    ],
  },
];

export default faqs;
