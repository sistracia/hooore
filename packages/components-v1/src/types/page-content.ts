import type { CallToActionProps, CallToActionSlug } from "./call-to-action";
import type { Content1Props, Content1Slug } from "./content-1";
import type { Content2Props, Content2Slug } from "./content-2";
import type { Content3Props, Content3Slug } from "./content-3";
import type { FAQProps, FAQSlug } from "./faq";
import type {
  HorizontalFeaturesListProps,
  HorizontalFeaturesListSlug,
  VerticalFeaturesListProps,
  VerticalFeaturesListSlug,
} from "./feature-list";
import type { FooterProps, FooterSlug } from "./footer";
import type { HeroProps, HeroSlug } from "./hero";
import type { HowItWorksProps, HowItWorksSlug } from "./how-it-works";
import type { LogoListProps, LogoListSlug } from "./logo-list";
import type { NavbarProps, NavbarSlug } from "./nav-bar";

export type CallToActionComponent = {
  slug: CallToActionSlug;
  content: CallToActionProps;
};

export type Content1Component = {
  slug: Content1Slug;
  content: Content1Props;
};

export type Content2Component = {
  slug: Content2Slug;
  content: Content2Props;
};

export type Content3Component = {
  slug: Content3Slug;
  content: Content3Props;
};

export type FAQComponent = {
  slug: FAQSlug;
  content: FAQProps;
};

export type VerticalFeaturesListComponent = {
  slug: VerticalFeaturesListSlug;
  content: VerticalFeaturesListProps;
};

export type HorizontalFeaturesListComponent = {
  slug: HorizontalFeaturesListSlug;
  content: HorizontalFeaturesListProps;
};

export type FooterComponent = {
  slug: FooterSlug;
  content: FooterProps;
};

export type HeroComponent = {
  slug: HeroSlug;
  content: HeroProps;
};

export type HowItWorksComponent = {
  slug: HowItWorksSlug;
  content: HowItWorksProps;
};

export type LogoListComponent = {
  slug: LogoListSlug;
  content: LogoListProps;
};

export type NavbarComponent = {
  slug: NavbarSlug;
  content: NavbarProps;
};

export type PageContentComponentProps =
  | CallToActionComponent
  | Content1Component
  | Content2Component
  | Content3Component
  | FAQComponent
  | VerticalFeaturesListComponent
  | HorizontalFeaturesListComponent
  | FooterComponent
  | HeroComponent
  | HowItWorksComponent
  | LogoListComponent
  | NavbarComponent;

export type PageContentComponentSlug = PageContentComponentProps["slug"];
export type PageContentComponentContent = PageContentComponentProps["content"];

export type PageContent = { id: string } & PageContentComponentProps;

export type TemplateCode = "company-profile-1";
