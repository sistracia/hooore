import type { Footer2Slug } from '../../types/template-types/footer-2'
import type { ComponentRenderer } from '../types'
import { Footer2, type Footer2RendererProps } from './footer-2'

export const FOOTER_2_META: ComponentRenderer<
  Footer2Slug,
  Footer2RendererProps
> = {
  slug: 'footer-2',
  component: Footer2,
}
