import type { Stats3Slug } from '../../types/template-types/stats-3'
import type { ComponentRenderer } from '../types'
import { type Stats3RendererProps, Stats3 } from './stats-3'

export const STATS_3_META: ComponentRenderer<Stats3Slug, Stats3RendererProps> =
  {
    slug: 'stats-3',
    component: Stats3,
  }
