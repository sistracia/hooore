import type { Content4Slug } from '../../types/template-types/content-4'
import type { ComponentRenderer } from '../types'
import { Content4, type Content4RendererProps } from './content-4'

export const CONTENT_4_META: ComponentRenderer<
  Content4Slug,
  Content4RendererProps
> = {
  slug: 'content-4',
  component: Content4,
}
