import type { FeaturesList1Slug } from '../../types/template-types/features-list-1'
import type { ComponentRenderer } from '../types'
import {
  FeaturesList1,
  type FeaturesList1RendererProps,
} from './feature-list-1'

export const FEATURE_LIST_1_META: ComponentRenderer<
  FeaturesList1Slug,
  FeaturesList1RendererProps
> = {
  slug: 'features-list-1',
  component: FeaturesList1,
}
