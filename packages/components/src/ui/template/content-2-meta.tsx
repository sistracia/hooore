import type { Content2Slug } from '../../types/template-types/content-2'
import type { ComponentRenderer } from '../types'
import { Content2, type Content2RendererProps } from './content-2'

export const CONTENT_2_META: ComponentRenderer<
  Content2Slug,
  Content2RendererProps
> = {
  slug: 'content-2',
  component: Content2,
}
