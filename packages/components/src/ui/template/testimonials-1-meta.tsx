import type { Testimonials1Slug } from '../../types/template-types/testimonials-1'
import type { ComponentRenderer } from '../types'
import {
  type Testimonials1RendererProps,
  Testimonials1,
} from './testimonials-1'

export const TESTIMONIALS_1_META: ComponentRenderer<
  Testimonials1Slug,
  Testimonials1RendererProps
> = {
  slug: 'testimonials-1',
  component: Testimonials1,
}
