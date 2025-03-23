import type { FeaturesList5Slug } from '../../types/template-types/features-list-5'
import type { ComponentRenderer } from '../types'
import {
  FeaturesList5,
  type FeaturesList5RendererProps,
} from './feature-list-5'

export const FEATURE_LIST_5_META: ComponentRenderer<
  FeaturesList5Slug,
  FeaturesList5RendererProps
> = {
  slug: 'features-list-5',
  component: FeaturesList5,
}
