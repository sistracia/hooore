import type { Team1Slug } from '../../types/template-types/team-1'
import type { ComponentRenderer } from '../types'
import { type Team1RendererProps, Team1 } from './team-1'

export const TEAM_1_META: ComponentRenderer<Team1Slug, Team1RendererProps> = {
  slug: 'team-1',
  component: Team1,
}
