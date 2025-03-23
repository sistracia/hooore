import type { Gallery1Slug } from '../../types/template-types/gallery-1'
import type { ComponentRenderer } from '../types'
import { type Gallery1RendererProps, Gallery1 } from './gallery-1'

export const GALLERY_1_META: ComponentRenderer<
  Gallery1Slug,
  Gallery1RendererProps
> = {
  slug: 'gallery-1',
  component: Gallery1,
}
