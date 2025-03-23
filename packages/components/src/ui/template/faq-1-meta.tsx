import type { Faq1Slug } from '../../types/template-types/faq-1'
import type { ComponentRenderer } from '../types'
import { Faq1, type Faq1RendererProps } from './faq-1'

export const FAQ_1_META: ComponentRenderer<Faq1Slug, Faq1RendererProps> = {
  slug: 'faq-1',
  component: Faq1,
}
