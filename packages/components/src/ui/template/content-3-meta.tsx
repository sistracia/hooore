import type { Content3Slug } from '../../types/template-types/content-3'
import type { ComponentRenderer } from '../types'
import { Content3, type Content3RendererProps } from './content-3'

export const CONTENT_3_META: ComponentRenderer<
  Content3Slug,
  Content3RendererProps
> = {
  slug: 'content-3',
  component: Content3,
}
