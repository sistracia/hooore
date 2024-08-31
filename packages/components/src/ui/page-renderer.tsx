import type {
  PageContent,
  PageContentComponentProps,
} from "../types/page-content";
import { CallToAction1 } from "./call-to-action-1";
import { CallToAction2 } from "./call-to-action-2";
import { CallToAction3 } from "./call-to-action-3";
import { CallToAction4 } from "./call-to-action-4";
import { CallToAction5 } from "./call-to-action-5";
import { CallToAction6 } from "./call-to-action-6";
import { Content1 } from "./content-1";
import { Content2 } from "./content-2";
import { Content3 } from "./content-3";
import { Content4 } from "./content-4";
import { Content5 } from "./content-5";
import { Content6 } from "./content-6";
import { Divider } from "./common/divider";
import { Faq1 } from "./faq-1";
import { Faq2 } from "./faq-2";
import { Faq3 } from "./faq-3";
import { Faq4 } from "./faq-4";
import { FeaturesList1 } from "./feature-list-1";
import { FeaturesList2 } from "./feature-list-2";
import { FeaturesList3 } from "./feature-list-3";
import { FeaturesList4 } from "./feature-list-4";
import { FeaturesList5 } from "./feature-list-5";
import { FeaturesList6 } from "./feature-list-6";
import { FeaturesList7 } from "./feature-list-7";
import { Footer1 } from "./footer-1";
import { Footer2 } from "./footer-2";
import { Footer3 } from "./footer-3";
import { Footer4 } from "./footer-4";
import { Hero1 } from "./hero-1";
import { Hero2 } from "./hero-2";
import { Hero3 } from "./hero-3";
import { Hero5 } from "./hero-5";
import { Hero4 } from "./hero-4";
import { HowItWorks1 } from "./how-it-works-1";
import { LogoList1 } from "./logo-list-1";
import { LogoList2 } from "./logo-list-2";
import { LogoList3 } from "./logo-list-3";
import { LogoList4 } from "./logo-list-4";
import { Navbar1 } from "./nav-bar-1";
import { Gallery1 } from "./gallery-1";
import { Gallery2 } from "./gallery-2";
import { Gallery3 } from "./gallery-3";
import { Collections1 } from "./collections-1";
import { Collections2 } from "./collections-2";
import { Collections3 } from "./collections-3";
import { Newsletter1 } from "./newsletter-1";
import { Newsletter2 } from "./newsletter-2";
import { Pricing1 } from "./pricing-1";
import { Pricing2 } from "./pricing-2";
import { Pricing3 } from "./pricing-3";
import { Team1 } from "./team-1";
import { Team2 } from "./team-2";
import { Team3 } from "./team-3";
import { Team4 } from "./team-4";
import { Blog1 } from "./blog-1";
import { Blog2 } from "./blog-2";
import { Blog3 } from "./blog-3";
import { Testimonials1 } from "./testimonials-1";
import { Testimonials2 } from "./testimonials-2";
import { Testimonials3 } from "./testimonials-3";
import { Testimonials4 } from "./testimonials-4";
import { Contact1 } from "./contact-1";
import { Contact2 } from "./contact-2";
import { Stats1 } from "./stats-1";
import { Stats2 } from "./stats-2";
import { Stats3 } from "./stats-3";
import { Step1 } from "./step-1";
import { Step2 } from "./step-2";
import { Step3 } from "./step-3";

export function PageRendererComponent(
  props: PageContentComponentProps & {
    disableLink?: boolean;
    disableAnimation?: boolean;
    projectLogo?: string;
  },
) {
  if (props.slug === "call-to-action-1") {
    return (
      <>
        <CallToAction1
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />

        <Divider />
      </>
    );
  }
  if (props.slug === "call-to-action-2") {
    return (
      <>
        <CallToAction2
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />

        <Divider />
      </>
    );
  }

  if (props.slug === "call-to-action-3") {
    return (
      <>
        <CallToAction3
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />

        <Divider />
      </>
    );
  }

  if (props.slug === "call-to-action-4") {
    return (
      <>
        <CallToAction4
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />

        <Divider />
      </>
    );
  }

  if (props.slug === "call-to-action-5") {
    return (
      <>
        <CallToAction5
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />

        <Divider />
      </>
    );
  }

  if (props.slug === "call-to-action-6") {
    return (
      <>
        <CallToAction6
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />

        <Divider />
      </>
    );
  }

  if (props.slug === "content-1") {
    return (
      <>
        <Content1
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "content-2") {
    return (
      <>
        <Content2
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "content-3") {
    return (
      <>
        <Content3
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "content-4") {
    return (
      <>
        <Content4
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "content-5") {
    return (
      <>
        <Content5
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "content-6") {
    return (
      <>
        <Content6
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "faq-1") {
    return (
      <>
        <Faq1
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "faq-2") {
    return (
      <>
        <Faq2
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "faq-3") {
    return (
      <>
        <Faq3
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "faq-4") {
    return (
      <>
        <Faq4
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "footer-1") {
    return (
      <>
        <Divider height={4} />
        <Footer1
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
      </>
    );
  }

  if (props.slug === "footer-2") {
    return (
      <Footer2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "footer-3") {
    return (
      <Footer3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "footer-4") {
    return (
      <Footer4
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "hero-1") {
    return (
      <>
        <Hero1
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "hero-2") {
    return (
      <>
        <Hero2
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "hero-3") {
    return (
      <>
        <Hero3
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "hero-4") {
    return (
      <>
        <Hero4
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "hero-5") {
    return (
      <>
        <Hero5
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "features-list-1") {
    return (
      <>
        <FeaturesList1
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "features-list-2") {
    return (
      <>
        <FeaturesList2
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "features-list-3") {
    return (
      <>
        <FeaturesList3
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "features-list-4") {
    return (
      <>
        <FeaturesList4
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "features-list-5") {
    return (
      <>
        <FeaturesList5
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "features-list-6") {
    return (
      <>
        <FeaturesList6
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "features-list-7") {
    return (
      <>
        <FeaturesList7
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "how-it-works-1") {
    return (
      <>
        <HowItWorks1
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "logo-list-1") {
    return (
      <>
        <LogoList1
          {...props.content}
          disableAnimation={props.disableAnimation}
          disableLink={props.disableLink}
          logo={props.projectLogo}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "logo-list-2") {
    return (
      <LogoList2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "logo-list-3") {
    return (
      <LogoList3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "logo-list-4") {
    return (
      <LogoList4
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "navbar-1") {
    return (
      <Navbar1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "gallery-1") {
    return (
      <Gallery1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "gallery-2") {
    return (
      <Gallery2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "gallery-3") {
    return (
      <Gallery3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "collections-1") {
    return (
      <Collections1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "collections-2") {
    return (
      <Collections2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "collections-3") {
    return (
      <Collections3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "newsletter-1") {
    return (
      <Newsletter1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "newsletter-2") {
    return (
      <Newsletter2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "pricing-1") {
    return (
      <Pricing1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "pricing-2") {
    return (
      <Pricing2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "pricing-3") {
    return (
      <Pricing3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "team-1") {
    return (
      <Team1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "team-2") {
    return (
      <Team2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "team-3") {
    return (
      <Team3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "team-4") {
    return (
      <Team4
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "blog-1") {
    return (
      <Blog1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "blog-2") {
    return (
      <Blog2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "blog-3") {
    return (
      <Blog3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "testimonials-1") {
    return (
      <Testimonials1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "testimonials-2") {
    return (
      <Testimonials2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "testimonials-3") {
    return (
      <Testimonials3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "testimonials-4") {
    return (
      <Testimonials4
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "contact-1") {
    return (
      <Contact1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "contact-2") {
    return (
      <Contact2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "stats-1") {
    return (
      <Stats1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "stats-2") {
    return (
      <Stats2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "stats-3") {
    return (
      <Stats3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "step-1") {
    return (
      <Step1
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "step-2") {
    return (
      <Step2
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  if (props.slug === "step-3") {
    return (
      <Step3
        {...props.content}
        disableAnimation={props.disableAnimation}
        disableLink={props.disableLink}
        logo={props.projectLogo}
      />
    );
  }

  return null;
}

export type PageRendererProps = {
  contents: PageContent[];
  disableLink?: boolean;
  projectLogo?: string;
};

export function PageRenderer({
  contents,
  disableLink = false,
  projectLogo,
}: PageRendererProps) {
  return contents.map((content) => {
    return (
      <PageRendererComponent
        {...content}
        key={content.id}
        disableLink={disableLink}
        projectLogo={projectLogo}
      />
    );
  });
}
