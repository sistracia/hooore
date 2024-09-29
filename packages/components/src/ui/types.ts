import type {
  PageContentComponentContent,
  PageContentComponentProps,
  PageContentComponentSlug,
} from "../types/page-content";

export type ComponentRenderer<
  TSlug extends PageContentComponentSlug,
  TProps extends PageContentComponentContent,
> = {
  slug: TSlug;
  component: React.JSXElementConstructor<TProps>;
};

export type PageRendererComponentProps = PageContentComponentProps & {
  disableLink?: boolean;
  disableAnimation?: boolean;
  projectLogo?: string;
};
