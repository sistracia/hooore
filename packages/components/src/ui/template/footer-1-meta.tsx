import type { Footer1Slug } from '../../types/template-types/footer-1'
import type { ComponentRenderer } from '../types'
import { Footer1, type Footer1RendererProps } from './footer-1'

export const FOOTER_1_META: ComponentRenderer<
  Footer1Slug,
  Footer1RendererProps
> = {
  slug: 'footer-1',
  component: Footer1,
}
