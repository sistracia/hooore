import type {
  PageContentComponentProps,
  TemplateCode,
} from "@repo/components-v1/types/page-content";
import { HeroForm } from "./hero-form";
import { LogoListForm } from "./log-list-form";
import {
  HorizontalFeatureListForm,
  VerticalFeatureListForm,
} from "./feature-list-form";
import { CallToActionForm } from "./call-to-action-form";
import { FAQForm } from "./faq-form";
import { FooterForm } from "./footer-form";
import { NavbarForm } from "./navbar-form";
import { HowItWorksForm } from "./how-it-works-form";
import { Content1Form } from "./content-1-form";

export type FormRendererProps = PageContentComponentProps & {
  code: TemplateCode;
  onChange: (values: PageContentComponentProps) => void;
};

export function FormRenderer(props: FormRendererProps) {
  if (props.slug === "call-to-action") {
    return (
      <CallToActionForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "content-1") {
    return (
      <Content1Form
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "content-2") {
    return null;
  }

  if (props.slug === "content-3") {
    return null;
  }

  if (props.slug === "faq") {
    return (
      <FAQForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "footer") {
    return (
      <FooterForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "hero") {
    return (
      <HeroForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "horizontal-features-list") {
    return (
      <HorizontalFeatureListForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "how-it-works") {
    return (
      <HowItWorksForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "logo-list") {
    return (
      <LogoListForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "navbar") {
    return (
      <NavbarForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  if (props.slug === "vertical-features-list") {
    return (
      <VerticalFeatureListForm
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  return null;
}
