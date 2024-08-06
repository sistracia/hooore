import type {
  PageContent,
  PageContentComponentProps,
} from "../types/page-content";
import { CallToAction } from "./call-to-action";
import { Content1 } from "./content-1";
import { Content2 } from "./content-2";
import { Content3 } from "./content-3";
import { Divider } from "./divider";
import { FAQ } from "./faq";
import { HorizontalFeaturesList, VerticalFeaturesList } from "./feature-list";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { HoooreLogo } from "./hooore-logo";
import { HowItWorks } from "./how-it-works";
import { LogoList } from "./logo-list";
import { Navbar } from "./nav-bar";

export function PageRendererComponent(
  props: PageContentComponentProps & {
    disableLink?: boolean;
  },
) {
  if (props.slug === "call-to-action") {
    return (
      <>
        <CallToAction {...props.content} disableLink={props.disableLink} />
        <Divider />
      </>
    );
  }

  if (props.slug === "content-1") {
    return (
      <>
        <Content1 {...props.content} />
        <Divider />
      </>
    );
  }

  if (props.slug === "content-2") {
    return (
      <>
        <Content2 {...props.content} />
        <Divider />
      </>
    );
  }

  if (props.slug === "content-3") {
    return (
      <>
        <Content3 {...props.content} />
        <Divider />
      </>
    );
  }

  if (props.slug === "faq") {
    return (
      <>
        <FAQ {...props.content} />
        <Divider />
      </>
    );
  }

  if (props.slug === "footer") {
    return (
      <>
        <Divider height={4} />
        <Footer
          {...props.content}
          disableLink={props.disableLink}
          logo={
            <HoooreLogo className="pc-h-[28px] pc-w-[89px] sm:pc-h-[48px] sm:pc-w-[152px]" />
          }
        />
      </>
    );
  }

  if (props.slug === "hero") {
    return (
      <>
        <Hero {...props.content} />
        <Divider />
      </>
    );
  }

  if (props.slug === "horizontal-features-list") {
    return (
      <>
        <HorizontalFeaturesList {...props.content} />
        <Divider />
      </>
    );
  }

  if (props.slug === "how-it-works") {
    return (
      <>
        <HowItWorks {...props.content} />
        <Divider />
      </>
    );
  }

  if (props.slug === "logo-list") {
    return (
      <>
        <LogoList {...props.content} />
        <Divider />
      </>
    );
  }

  if (props.slug === "navbar") {
    return (
      <Navbar
        {...props.content}
        disableLink={props.disableLink}
        logo={
          <HoooreLogo className="pc-h-[28px] pc-w-[89px] sm:pc-h-[48px] sm:pc-w-[152px]" />
        }
      />
    );
  }

  if (props.slug === "vertical-features-list") {
    return (
      <>
        <VerticalFeaturesList
          {...props.content}
          disableLink={props.disableLink}
        />
        <Divider />
      </>
    );
  }

  return null;
}

export type PageRendererProps = {
  contents: PageContent[];
  disableLink?: boolean;
};

export function PageRenderer({
  contents,
  disableLink = false,
}: PageRendererProps) {
  return contents.map((content) => {
    return (
      <PageRendererComponent
        {...content}
        key={content.id}
        disableLink={disableLink}
      />
    );
  });
}
