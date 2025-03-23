import type { HowItWorks1Slug } from '../../types/template-types/how-it-works-1'

import type { ComponentRenderer } from '../types'
import { type HowItWorks1RendererProps, HowItWorks1 } from './how-it-works-1'

export const HOW_IT_WORKS_1_META: ComponentRenderer<
  HowItWorks1Slug,
  HowItWorks1RendererProps
> = {
  slug: 'how-it-works-1',
  component: HowItWorks1,
}
