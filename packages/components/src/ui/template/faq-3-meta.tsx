import type { Faq3Slug } from '../../types/template-types/faq-3'
import type { ComponentRenderer } from '../types'
import { Faq3, type Faq3RendererProps } from './faq-3'

export const FAQ_3_META: ComponentRenderer<Faq3Slug, Faq3RendererProps> = {
  slug: 'faq-3',
  component: Faq3,
}
