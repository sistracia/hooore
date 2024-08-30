import type { PageContentComponentProps } from "@repo/components/types/page-content";
import { Hero1Form } from "./hero-1-form";
import { LogoList1Form } from "./log-list-1-form";
import { FeatureList1Form } from "./feature-list-1-form";
import { FeatureList2Form } from "./feature-list-2-form";
import { CallToAction1Form } from "./call-to-action-1-form";
import { FAQ1Form } from "./faq-1-form";
import { Footer1Form } from "./footer-1-form";
import { HowItWorks1Form } from "./how-it-works-1-form";
import { Content1Form } from "./content-1-form";
import { Content3Form } from "./content-3-form";
import { Content2Form } from "./content-2-form";
import { Hero2Form } from "./hero-2-form";

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

  if (props.slug === "features-list-1") {
    return (
      <FeatureList1Form
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "features-list-2") {
    return (
      <FeatureList2Form
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
