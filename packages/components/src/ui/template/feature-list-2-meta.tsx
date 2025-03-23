import type { FeaturesList2Slug } from '../../types/template-types/features-list-2'
import type { ComponentRenderer } from '../types'
import {
  FeaturesList2,
  type FeaturesList2RendererProps,
} from './feature-list-2'

export const FEATURE_LIST_2_META: ComponentRenderer<
  FeaturesList2Slug,
  FeaturesList2RendererProps
> = {
  slug: 'features-list-2',
  component: FeaturesList2,
}
