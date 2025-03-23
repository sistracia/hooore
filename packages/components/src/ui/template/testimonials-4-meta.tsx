import type { Testimonials4Slug } from '../../types/template-types/testimonials-4'
import type { ComponentRenderer } from '../types'
import {
  type Testimonials4RendererProps,
  Testimonials4,
} from './testimonials-4'

export const TESTIMONIALS_4_META: ComponentRenderer<
  Testimonials4Slug,
  Testimonials4RendererProps
> = {
  slug: 'testimonials-4',
  component: Testimonials4,
}
