import type { Hero4Slug } from '../../types/template-types/hero-4'
import type { ComponentRenderer } from '../types'
import { type Hero4RendererProps, Hero4 } from './hero-4'

export const HERO_4_META: ComponentRenderer<Hero4Slug, Hero4RendererProps> = {
  slug: 'hero-4',
  component: Hero4,
}
