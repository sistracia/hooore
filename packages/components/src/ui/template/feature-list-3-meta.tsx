import type { FeaturesList3Slug } from '../../types/template-types/features-list-3'
import type { ComponentRenderer } from '../types'
import {
  FeaturesList3,
  type FeaturesList3RendererProps,
} from './feature-list-3'

export const FEATURE_LIST_3_META: ComponentRenderer<
  FeaturesList3Slug,
  FeaturesList3RendererProps
> = {
  slug: 'features-list-3',
  component: FeaturesList3,
}
