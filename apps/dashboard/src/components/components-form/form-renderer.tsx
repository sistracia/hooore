import type {
  PageContentComponentProps,
  TemplateCode,
} from "@repo/components/types/page-content";
import { HeroForm } from "./hero-form";
import { LogoListForm } from "./log-list-form";
import {
  HorizontalFeatureListForm,
  VerticalFeatureListForm,
} from "./feature-list-form";
import { CallToActionForm } from "./call-to-action-form";
import { FAQForm } from "./faq-form";
import { FooterForm } from "./footer-form";
import { HowItWorksForm } from "./how-it-works-form";
import { Content1Form } from "./content-1-form";
import { Content3Form } from "./content-3-form";
import { Content2Form } from "./content-2-form";

export type FormRendererProps = PageContentComponentProps & {
  code: TemplateCode;
  onChange: (values: PageContentComponentProps) => void;
  projectId: string;
};

export function FormRenderer(props: FormRendererProps) {
  if (props.slug === "call-to-action") {
    return (
      <CallToActionForm
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

  if (props.slug === "faq") {
    return (
      <FAQForm
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "footer") {
    return (
      <FooterForm
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "hero") {
    return (
      <HeroForm
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "horizontal-features-list") {
    return (
      <HorizontalFeatureListForm
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "how-it-works") {
    return (
      <HowItWorksForm
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "logo-list") {
    return (
      <LogoListForm
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "vertical-features-list") {
    return (
      <VerticalFeatureListForm
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  return null;
}
