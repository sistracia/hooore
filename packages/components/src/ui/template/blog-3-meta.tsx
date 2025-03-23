import type { Blog3Slug } from '../../types/template-types/blog-3'
import type { ComponentRenderer } from '../types'
import { Blog3, type Blog3RendererProps } from './blog-3'

export const BLOG_3_META: ComponentRenderer<Blog3Slug, Blog3RendererProps> = {
  slug: 'blog-3',
  component: Blog3,
}
