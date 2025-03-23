import type { Pricing1Slug } from '../../types/template-types/pricing-1'
import type { ComponentRenderer } from '../types'
import { type Pricing1RendererProps, Pricing1 } from './pricing-1'

export const PRICING_1_META: ComponentRenderer<
  Pricing1Slug,
  Pricing1RendererProps
> = {
  slug: 'pricing-1',
  component: Pricing1,
}
