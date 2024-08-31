import type { PageContentComponentProps } from "@repo/components/types/page-content";
import { Hero1Form } from "./hero-1-form";
import { Hero2Form } from "./hero-2-form";
import { Hero3Form } from "./hero-3-form";
import { Hero4Form } from "./hero-4-form";
import { Hero5Form } from "./hero-5-form";
import { LogoList1Form } from "./log-list-1-form";
import { LogoList2Form } from "./logo-list-2-form";
import { LogoList3Form } from "./logo-list-3-form";
import { LogoList4Form } from "./logo-list-4-form";
import { FeaturesList1Form } from "./features-list-1-form";
import { FeaturesList2Form } from "./features-list-2-form";
import { FeaturesList3Form } from "./features-list-3-form";
import { FeaturesList4Form } from "./features-list-4-form";
import { FeaturesList5Form } from "./features-list-5-form";
import { FeaturesList6Form } from "./features-list-6-form";
import { FeaturesList7Form } from "./features-list-7-form";
import { CallToAction1Form } from "./call-to-action-1-form";
import { CallToAction2Form } from "./call-to-action-2-form";
import { CallToAction3Form } from "./call-to-action-3-form";
import { CallToAction4Form } from "./call-to-action-4-form";
import { CallToAction5Form } from "./call-to-action-5-form";
import { CallToAction6Form } from "./call-to-action-6-form";
import { Faq1Form } from "./faq-1-form";
import { Faq2Form } from "./faq-2-form";
import { Faq3Form } from "./faq-3-form";
import { Faq4Form } from "./faq-4-form";
import { Footer1Form } from "./footer-1-form";
import { Footer2Form } from "./footer-2-form";
import { Footer3Form } from "./footer-3-form";
import { Footer4Form } from "./footer-4-form";
import { HowItWorks1Form } from "./how-it-works-1-form";
import { Content1Form } from "./content-1-form";
import { Content2Form } from "./content-2-form";
import { Content3Form } from "./content-3-form";
import { Content4Form } from "./content-4-form";
import { Content5Form } from "./content-5-form";
import { Content6Form } from "./content-6-form";
import { Gallery1Form } from "./gallery-1-form";
import { Gallery2Form } from "./gallery-2-form";
import { Gallery3Form } from "./gallery-3-form";
import { Collections1Form } from "./collections-1-form";
import { Collections2Form } from "./collections-2-form";
import { Collections3Form } from "./collections-3-form";
import { Newsletter1Form } from "./newsletter-1-form";
import { Newsletter2Form } from "./newsletter-2-form";
import { Pricing1Form } from "./pricing-1-form";
import { Pricing2Form } from "./pricing-2-form";
import { Pricing3Form } from "./pricing-3-form";
import { Team1Form } from "./team-1-form";
import { Team2Form } from "./team-2-form";
import { Team3Form } from "./team-3-form";
import { Team4Form } from "./team-4-form";
import { Blog1Form } from "./blog-1-form";
import { Blog2Form } from "./blog-2-form";
import { Blog3Form } from "./blog-3-form";
import { Testimonials1Form } from "./testimonials-1-form";
import { Testimonials2Form } from "./testimonials-2-form";
import { Testimonials3Form } from "./testimonials-3-form";
import { Testimonials4Form } from "./testimonials-4-form";
import { Contact1Form } from "./contact-1-form";
import { Contact2Form } from "./contact-2-form";
import { Stats1Form } from "./stats-1-form";
import { Stats2Form } from "./stats-2-form";
import { Stats3Form } from "./stats-3-form";
import { Step1Form } from "./step-1-form";
import { Step2Form } from "./step-2-form";
import { Step3Form } from "./step-3-form";

export type FormRendererProps = PageContentComponentProps & {
  onChange: (values: PageContentComponentProps) => void;
  projectId: string;
};

export function FormRenderer(props: FormRendererProps) {
  if (props.slug === "call-to-action-1") {
    return (
      <CallToAction1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "call-to-action-2") {
    return (
      <CallToAction2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "call-to-action-3") {
    return (
      <CallToAction3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "call-to-action-4") {
    return (
      <CallToAction4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "call-to-action-5") {
    return (
      <CallToAction5Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "call-to-action-6") {
    return (
      <CallToAction6Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "content-1") {
    return (
      <Content1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "content-2") {
    return (
      <Content2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "content-3") {
    return (
      <Content3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "content-4") {
    return (
      <Content4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "content-5") {
    return (
      <Content5Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "content-6") {
    return (
      <Content6Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "faq-1") {
    return (
      <Faq1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "faq-2") {
    return (
      <Faq2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "faq-3") {
    return (
      <Faq3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "faq-4") {
    return (
      <Faq4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "footer-1") {
    return (
      <Footer1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "footer-2") {
    return (
      <Footer2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "footer-3") {
    return (
      <Footer3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "footer-4") {
    return (
      <Footer4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "hero-1") {
    return (
      <Hero1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "hero-2") {
    return (
      <Hero2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "hero-3") {
    return (
      <Hero3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "hero-4") {
    return (
      <Hero4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "hero-5") {
    return (
      <Hero5Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "features-list-1") {
    return (
      <FeaturesList1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "features-list-2") {
    return (
      <FeaturesList2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "features-list-3") {
    return (
      <FeaturesList3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "features-list-4") {
    return (
      <FeaturesList4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "features-list-5") {
    return (
      <FeaturesList5Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "features-list-6") {
    return (
      <FeaturesList6Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "features-list-7") {
    return (
      <FeaturesList7Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "how-it-works-1") {
    return (
      <HowItWorks1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "logo-list-1") {
    return (
      <LogoList1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "logo-list-2") {
    return (
      <LogoList2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "logo-list-3") {
    return (
      <LogoList3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "logo-list-4") {
    return (
      <LogoList4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "gallery-1") {
    return (
      <Gallery1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "gallery-2") {
    return (
      <Gallery2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "gallery-3") {
    return (
      <Gallery3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "collections-1") {
    return (
      <Collections1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "collections-2") {
    return (
      <Collections2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "collections-3") {
    return (
      <Collections3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "newsletter-1") {
    return (
      <Newsletter1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "newsletter-2") {
    return (
      <Newsletter2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "pricing-1") {
    return (
      <Pricing1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "pricing-2") {
    return (
      <Pricing2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "pricing-3") {
    return (
      <Pricing3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "team-1") {
    return (
      <Team1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "team-2") {
    return (
      <Team2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "team-3") {
    return (
      <Team3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "team-4") {
    return (
      <Team4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "blog-1") {
    return (
      <Blog1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "blog-2") {
    return (
      <Blog2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "blog-3") {
    return (
      <Blog3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "testimonials-1") {
    return (
      <Testimonials1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "testimonials-2") {
    return (
      <Testimonials2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "testimonials-3") {
    return (
      <Testimonials3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "testimonials-4") {
    return (
      <Testimonials4Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "contact-1") {
    return (
      <Contact1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "contact-2") {
    return (
      <Contact2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "stats-1") {
    return (
      <Stats1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "stats-2") {
    return (
      <Stats2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "stats-3") {
    return (
      <Stats3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "step-1") {
    return (
      <Step1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "step-2") {
    return (
      <Step2Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "step-3") {
    return (
      <Step3Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  return null;
}
