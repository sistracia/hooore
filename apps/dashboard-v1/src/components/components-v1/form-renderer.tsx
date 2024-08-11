import type {
  PageContentComponentProps,
  TemplateCode,
} from "@repo/components-v1/types/page-content";
import { HeroForm } from "./hero-form";
import { LogoListForm } from "./log-list-form";

export type FormRendererProps = PageContentComponentProps & {
  code: TemplateCode;
  onChange: (values: PageContentComponentProps) => void;
};

export function FormRenderer(props: FormRendererProps) {
  if (props.slug === "call-to-action") {
    return null;
  }

  if (props.slug === "content-1") {
    return null;
  }

  if (props.slug === "content-2") {
    return null;
  }

  if (props.slug === "content-3") {
    return null;
  }

  if (props.slug === "faq") {
    return null;
  }

  if (props.slug === "footer") {
    return null;
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
    return null;
  }

  if (props.slug === "how-it-works") {
    return null;
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
    return null;
  }

  if (props.slug === "vertical-features-list") {
    return null;
  }

  return null;
}
