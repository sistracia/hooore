import type { Hero5Slug } from '../../types/template-types/hero-5'
import type { ComponentRenderer } from '../types'
import { type Hero5RendererProps, Hero5 } from './hero-5'

export const HERO_5_META: ComponentRenderer<Hero5Slug, Hero5RendererProps> = {
  slug: 'hero-5',
  component: Hero5,
}
