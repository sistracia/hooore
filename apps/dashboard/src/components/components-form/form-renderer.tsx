import type { PageContentComponentProps } from "@repo/components/types/page-content";
import { Hero1Form } from "./hero-1-form";
import { Hero2Form } from "./hero-2-form";
import { Hero3Form } from "./hero-3-form";
import { Hero4Form } from "./hero-4-form";
import { Hero5Form } from "./hero-5-form";
import { LogoList1Form } from "./log-list-1-form";
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
import { FAQ1Form } from "./faq-1-form";
import { Footer1Form } from "./footer-1-form";
import { HowItWorks1Form } from "./how-it-works-1-form";
import { Content1Form } from "./content-1-form";
import { Content2Form } from "./content-2-form";
import { Content3Form } from "./content-3-form";
import { Content4Form } from "./content-4-form";
import { Content5Form } from "./content-5-form";
import { Content6Form } from "./content-6-form";

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
      <FAQ1Form
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

  return null;
}
