import type { Pricing3Slug } from '../../types/template-types/pricing-3'
import type { ComponentRenderer } from '../types'
import { type Pricing3RendererProps, Pricing3 } from './pricing-3'

export const PRICING_3_META: ComponentRenderer<
  Pricing3Slug,
  Pricing3RendererProps
> = {
  slug: 'pricing-3',
  component: Pricing3,
}
