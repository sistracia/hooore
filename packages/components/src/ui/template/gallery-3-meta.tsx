import type { Gallery3Slug } from '../../types/template-types/gallery-3'
import type { ComponentRenderer } from '../types'
import { type Gallery3RendererProps, Gallery3 } from './gallery-3'

export const GALLERY_3_META: ComponentRenderer<
  Gallery3Slug,
  Gallery3RendererProps
> = {
  slug: 'gallery-3',
  component: Gallery3,
}
