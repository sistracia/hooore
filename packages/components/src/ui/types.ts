import type {
  PageContentComponentComponent,
  PageContentComponentProps,
  PageContentComponentSlug,
} from '../types/page-content'

export type AdditionalPageRendererComponentProps = {
  disableLink?: boolean
  disableAnimation?: boolean
  projectLogo?: string
}

export type PageRendererComponentProps = PageContentComponentProps &
  AdditionalPageRendererComponentProps

export type ComponentRenderer<
  TSlug extends PageContentComponentSlug,
  TProps extends PageContentComponentComponent,
> = {
  slug: TSlug
  component: React.JSXElementConstructor<TProps>
}
