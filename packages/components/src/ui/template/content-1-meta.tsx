import type { Content1Slug } from '../../types/template-types/content-1'
import type { ComponentRenderer } from '../types'
import { Content1, type Content1RendererProps } from './content-1'

export const CONTENT_1_META: ComponentRenderer<
  Content1Slug,
  Content1RendererProps
> = {
  slug: 'content-1',
  component: Content1,
}
