import type { Testimonials3Slug } from '../../types/template-types/testimonials-3'
import type { ComponentRenderer } from '../types'
import {
  type Testimonials3RendererProps,
  Testimonials3,
} from './testimonials-3'

export const TESTIMONIALS_3_META: ComponentRenderer<
  Testimonials3Slug,
  Testimonials3RendererProps
> = {
  slug: 'testimonials-3',
  component: Testimonials3,
}
