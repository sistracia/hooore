import type { Content6Slug } from '../../types/template-types/content-6'
import type { ComponentRenderer } from '../types'
import { Content6, type Content6RendererProps } from './content-6'

export const CONTENT_6_META: ComponentRenderer<
  Content6Slug,
  Content6RendererProps
> = {
  slug: 'content-6',
  component: Content6,
}
