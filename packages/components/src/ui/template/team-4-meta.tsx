import type { Team4Slug } from '../../types/template-types/team-4'
import type { ComponentRenderer } from '../types'
import { type Team4RendererProps, Team4 } from './team-4'

export const TEAM_4_META: ComponentRenderer<Team4Slug, Team4RendererProps> = {
  slug: 'team-4',
  component: Team4,
}
