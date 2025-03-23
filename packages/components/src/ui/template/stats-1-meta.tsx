import type { Stats1Slug } from '../../types/template-types/stats-1'
import type { ComponentRenderer } from '../types'
import { type Stats1RendererProps, Stats1 } from './stats-1'

export const STATS_1_META: ComponentRenderer<Stats1Slug, Stats1RendererProps> =
  {
    slug: 'stats-1',
    component: Stats1,
  }
