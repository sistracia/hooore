import type { Hero6Slug } from '../../types/template-types/hero-6'
import type { ComponentRenderer } from '../types'
import { type Hero6RendererProps, Hero6 } from './hero-6'

export const HERO_6_META: ComponentRenderer<Hero6Slug, Hero6RendererProps> = {
  slug: 'hero-6',
  component: Hero6,
}
