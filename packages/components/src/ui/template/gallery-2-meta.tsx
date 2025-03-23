import type { Gallery2Slug } from '../../types/template-types/gallery-2'
import type { ComponentRenderer } from '../types'
import { type Gallery2RendererProps, Gallery2 } from './gallery-2'

export const GALLERY_2_META: ComponentRenderer<
  Gallery2Slug,
  Gallery2RendererProps
> = {
  slug: 'gallery-2',
  component: Gallery2,
}
