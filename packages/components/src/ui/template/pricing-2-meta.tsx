import type { Pricing2Slug } from '../../types/template-types/pricing-2'
import type { ComponentRenderer } from '../types'
import { type Pricing2RendererProps, Pricing2 } from './pricing-2'

export const PRICING_2_META: ComponentRenderer<
  Pricing2Slug,
  Pricing2RendererProps
> = {
  slug: 'pricing-2',
  component: Pricing2,
}
