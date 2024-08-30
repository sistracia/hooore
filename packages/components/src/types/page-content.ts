import type { CallToAction1Props, CallToAction1Slug } from "./call-to-action-1";
import type { Content1Props, Content1Slug } from "./content-1";
import type { Content2Props, Content2Slug } from "./content-2";
import type { Content3Props, Content3Slug } from "./content-3";
import type { FAQ1Props, FAQ1Slug } from "./faq-1";
import type { FeaturesList1Props, FeaturesList1Slug } from "./feature-list-1";
import type { FeaturesList2Props, FeaturesList2Slug } from "./feature-list-2";
import type { Footer1Props, Footer1Slug } from "./footer-1";
import type { Hero1Props, Hero1Slug } from "./hero-1";
import type { Hero2Props, Hero2Slug } from "./hero-2";
import type { HowItWorks1Props, HowItWorks1Slug } from "./how-it-works-1";
import type { LogoList1Props, LogoList1Slug } from "./logo-list-1";
import type { Navbar1Props, Navbar1Slug } from "./nav-bar-1";

export type CallToAction1Component = {
  slug: CallToAction1Slug;
  content: CallToAction1Props;
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

export type FAQ1Component = {
  slug: FAQ1Slug;
  content: FAQ1Props;
};

export type FeaturesList1Component = {
  slug: FeaturesList1Slug;
  content: FeaturesList1Props;
};

export type FeaturesList2Component = {
  slug: FeaturesList2Slug;
  content: FeaturesList2Props;
};

export type Footer1Component = {
  slug: Footer1Slug;
  content: Footer1Props;
};

export type Hero1Component = {
  slug: Hero1Slug;
  content: Hero1Props;
};

export type Hero2Component = {
  slug: Hero2Slug;
  content: Hero2Props;
};

export type HowItWorks1Component = {
  slug: HowItWorks1Slug;
  content: HowItWorks1Props;
};

export type LogoList1Component = {
  slug: LogoList1Slug;
  content: LogoList1Props;
};

export type Navbar1Component = {
  slug: Navbar1Slug;
  content: Navbar1Props;
};

export type PageContentComponentProps =
  | CallToAction1Component
  | Content1Component
  | Content2Component
  | Content3Component
  | FAQ1Component
  | FeaturesList1Component
  | FeaturesList2Component
  | Footer1Component
  | Hero1Component
  | Hero2Component
  | HowItWorks1Component
  | LogoList1Component
  | Navbar1Component;

export type PageContentComponentSlug = PageContentComponentProps["slug"];
export type PageContentComponentContent = PageContentComponentProps["content"];

export type PageContent = { id: string } & PageContentComponentProps;
