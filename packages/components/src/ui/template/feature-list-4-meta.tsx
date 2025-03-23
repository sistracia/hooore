import type { FeaturesList4Slug } from '../../types/template-types/features-list-4'
import type { ComponentRenderer } from '../types'
import {
  FeaturesList4,
  type FeaturesList4RendererProps,
} from './feature-list-4'

export const FEATURE_LIST_4_META: ComponentRenderer<
  FeaturesList4Slug,
  FeaturesList4RendererProps
> = {
  slug: 'features-list-4',
  component: FeaturesList4,
}
