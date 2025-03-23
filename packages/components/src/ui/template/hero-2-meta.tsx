import type { Hero2Slug } from '../../types/template-types/hero-2'
import type { ComponentRenderer } from '../types'
import { type Hero2RendererProps, Hero2 } from './hero-2'

export const HERO_2_META: ComponentRenderer<Hero2Slug, Hero2RendererProps> = {
  slug: 'hero-2',
  component: Hero2,
}
