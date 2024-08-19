import type {
  PageContent,
  PageContentComponentProps,
} from "../types/page-content";
import { CallToAction1 } from "./call-to-action-1";
import { Content1 } from "./content-1";
import { Content2 } from "./content-2";
import { Content3 } from "./content-3";
import { Divider } from "./common/divider";
import { FAQ1 } from "./faq-1";
import { FeaturesList1 } from "./feature-list-1";
import { FeaturesList2 } from "./feature-list-2";
import { Footer1 } from "./footer-1";
import { Hero1 } from "./hero-1";
import { HowItWorks1 } from "./how-it-works-1";
import { LogoList1 } from "./logo-list-1";
import { Navbar1 } from "./nav-bar-1";

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
          disableLink={props.disableLink}
          className="pc-bg-page-background pc-text-text"
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
          className="pc-bg-page-background pc-text-text"
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
          className="pc-bg-page-background pc-text-text"
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
          className="pc-bg-page-background pc-text-text"
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "faq-1") {
    return (
      <>
        <FAQ1
          {...props.content}
          className="pc-bg-page-background pc-text-text"
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
          disableLink={props.disableLink}
          className="pc-bg-page-background pc-text-text"
          logo={props.projectLogo}
        />
      </>
    );
  }

  if (props.slug === "hero-1") {
    return (
      <>
        <Hero1
          {...props.content}
          disableLink={props.disableLink}
          className="pc-bg-page-background pc-text-text"
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
          disableLink={props.disableLink}
          className="pc-bg-page-background pc-text-text"
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
          className="pc-bg-page-background pc-text-text"
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
          className="pc-bg-page-background pc-text-text"
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
          className="pc-bg-page-background pc-text-text"
          disableAnimation={props.disableAnimation}
        />
        <Divider />
      </>
    );
  }

  if (props.slug === "navbar-1") {
    return (
      <Navbar1
        {...props.content}
        disableLink={props.disableLink}
        className="pc-text-text"
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
