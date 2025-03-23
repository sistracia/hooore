import type { Hero1Slug } from '../../types/template-types/hero-1'
import type { ComponentRenderer } from '../types'
import { type Hero1RendererProps, Hero1 } from './hero-1'

export const HERO_1_META: ComponentRenderer<Hero1Slug, Hero1RendererProps> = {
  slug: 'hero-1',
  component: Hero1,
}
