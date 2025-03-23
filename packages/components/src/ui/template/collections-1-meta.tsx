import type { Collections1Slug } from '../../types/template-types/collections-1'
import type { ComponentRenderer } from '../types'
import { Collections1, type Collections1RendererProps } from './collections-1'

export const COLLECTIONS_1_META: ComponentRenderer<
  Collections1Slug,
  Collections1RendererProps
> = {
  slug: 'collections-1',
  component: Collections1,
}
