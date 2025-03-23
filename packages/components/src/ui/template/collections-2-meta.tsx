import type { Collections2Slug } from '../../types/template-types/collections-2'
import type { ComponentRenderer } from '../types'
import { Collections2, type Collections2RendererProps } from './collections-2'

export const COLLECTIONS_2_META: ComponentRenderer<
  Collections2Slug,
  Collections2RendererProps
> = {
  slug: 'collections-2',
  component: Collections2,
}
