import type { Hero3Slug } from '../../types/template-types/hero-3'
import type { ComponentRenderer } from '../types'
import { type Hero3RendererProps, Hero3 } from './hero-3'

export const HERO_3_META: ComponentRenderer<Hero3Slug, Hero3RendererProps> = {
  slug: 'hero-3',
  component: Hero3,
}
