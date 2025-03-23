import type { Faq4Slug } from '../../types/template-types/faq-4'
import type { ComponentRenderer } from '../types'
import { Faq4, type Faq4RendererProps } from './faq-4'

export const FAQ_4_META: ComponentRenderer<Faq4Slug, Faq4RendererProps> = {
  slug: 'faq-4',
  component: Faq4,
}
