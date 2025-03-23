import type { Faq2Slug } from '../../types/template-types/faq-2'
import type { ComponentRenderer } from '../types'
import { Faq2, type Faq2RendererProps } from './faq-2'

export const FAQ_2_META: ComponentRenderer<Faq2Slug, Faq2RendererProps> = {
  slug: 'faq-2',
  component: Faq2,
}
