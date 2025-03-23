import type { FeaturesList6Slug } from '../../types/template-types/features-list-6'
import type { ComponentRenderer } from '../types'
import {
  FeaturesList6,
  type FeaturesList6RendererProps,
} from './feature-list-6'

export const FEATURE_LIST_6_META: ComponentRenderer<
  FeaturesList6Slug,
  FeaturesList6RendererProps
> = {
  slug: 'features-list-6',
  component: FeaturesList6,
}
