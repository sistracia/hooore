import type { Footer3Slug } from '../../types/template-types/footer-3'
import type { ComponentRenderer } from '../types'
import { Footer3, type Footer3RendererProps } from './footer-3'

export const FOOTER_3_META: ComponentRenderer<
  Footer3Slug,
  Footer3RendererProps
> = {
  slug: 'footer-3',
  component: Footer3,
}
