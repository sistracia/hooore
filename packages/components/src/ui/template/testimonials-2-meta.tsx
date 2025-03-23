import type { Testimonials2Slug } from '../../types/template-types/testimonials-2'
import type { ComponentRenderer } from '../types'
import {
  type Testimonials2RendererProps,
  Testimonials2,
} from './testimonials-2'

export const TESTIMONIALS_2_META: ComponentRenderer<
  Testimonials2Slug,
  Testimonials2RendererProps
> = {
  slug: 'testimonials-2',
  component: Testimonials2,
}
