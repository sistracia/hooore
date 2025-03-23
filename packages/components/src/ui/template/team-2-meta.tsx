import type { Team2Slug } from '../../types/template-types/team-2'
import type { ComponentRenderer } from '../types'
import { type Team2RendererProps, Team2 } from './team-2'

export const TEAM_2_META: ComponentRenderer<Team2Slug, Team2RendererProps> = {
  slug: 'team-2',
  component: Team2,
}
