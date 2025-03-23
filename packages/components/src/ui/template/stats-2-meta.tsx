import type { Stats2Slug } from '../../types/template-types/stats-2'
import type { ComponentRenderer } from '../types'
import { type Stats2RendererProps, Stats2 } from './stats-2'

export const STATS_2_META: ComponentRenderer<Stats2Slug, Stats2RendererProps> =
  {
    slug: 'stats-2',
    component: Stats2,
  }
