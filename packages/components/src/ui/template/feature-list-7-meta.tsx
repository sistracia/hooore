import type { FeaturesList7Slug } from '../../types/template-types/features-list-7'
import type { ComponentRenderer } from '../types'
import {
  FeaturesList7,
  type FeaturesList7RendererProps,
} from './feature-list-7'

export const FEATURE_LIST_7_META: ComponentRenderer<
  FeaturesList7Slug,
  FeaturesList7RendererProps
> = {
  slug: 'features-list-7',
  component: FeaturesList7,
}
