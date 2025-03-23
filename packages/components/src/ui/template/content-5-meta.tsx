import type { Content5Slug } from '../../types/template-types/content-5'
import type { ComponentRenderer } from '../types'
import { Content5, type Content5RendererProps } from './content-5'

export const CONTENT_5_META: ComponentRenderer<
  Content5Slug,
  Content5RendererProps
> = {
  slug: 'content-5',
  component: Content5,
}
