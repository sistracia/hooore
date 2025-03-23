import type { Footer4Slug } from '../../types/template-types/footer-4'
import type { ComponentRenderer } from '../types'
import { type Footer4RendererProps, Footer4 } from './footer-4'

export const FOOTER_4_META: ComponentRenderer<
  Footer4Slug,
  Footer4RendererProps
> = {
  slug: 'footer-4',
  component: Footer4,
}
