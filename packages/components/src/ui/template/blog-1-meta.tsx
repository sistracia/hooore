import type { Blog1Slug } from '../../types/template-types/blog-1'
import type { ComponentRenderer } from '../types'
import { Blog1, type Blog1RendererProps } from './blog-1'

export const BLOG_1_META: ComponentRenderer<Blog1Slug, Blog1RendererProps> = {
  slug: 'blog-1',
  component: Blog1,
}
