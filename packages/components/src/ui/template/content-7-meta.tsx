import type { Content7Slug } from '../../types/template-types/content-7'
import type { ComponentRenderer } from '../types'
import { type Content7RendererProps, Content7 } from './content-7'

export const CONTENT_7_META: ComponentRenderer<
  Content7Slug,
  Content7RendererProps
> = {
  slug: 'content-7',
  component: Content7,
}
