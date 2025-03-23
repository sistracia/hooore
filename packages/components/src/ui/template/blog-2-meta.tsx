import type { Blog2Slug } from '../../types/template-types/blog-2'
import type { ComponentRenderer } from '../types'
import { Blog2, type Blog2RendererProps } from './blog-2'

export const BLOG_2_META: ComponentRenderer<Blog2Slug, Blog2RendererProps> = {
  slug: 'blog-2',
  component: Blog2,
}
