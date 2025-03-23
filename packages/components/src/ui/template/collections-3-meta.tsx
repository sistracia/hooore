import type { Collections3Slug } from '../../types/template-types/collections-3'
import type { ComponentRenderer } from '../types'
import { Collections3, type Collections3RendererProps } from './collections-3'

export const COLLECTIONS_3_META: ComponentRenderer<
  Collections3Slug,
  Collections3RendererProps
> = {
  slug: 'collections-3',
  component: Collections3,
}
