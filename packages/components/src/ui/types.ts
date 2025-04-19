import type {
  PageContentComponent,
  PageContentComponentProps,
  PageContentComponentSlug,
} from "../types/page-content";

export type AdditionalPageRendererComponentProps = {
  disableLink?: boolean;
  disableAnimation?: boolean;
  projectLogo?: string;
};

export type PageRendererComponentProps = PageContentComponent &
  AdditionalPageRendererComponentProps;

export type ComponentRenderer<
  TSlug extends PageContentComponentSlug,
  TProps extends PageContentComponentProps
> = {
  slug: TSlug;
  component: React.JSXElementConstructor<TProps>;
};
