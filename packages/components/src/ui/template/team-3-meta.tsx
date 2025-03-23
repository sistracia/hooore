import type { Team3Slug } from '../../types/template-types/team-3'
import type { ComponentRenderer } from '../types'
import { type Team3RendererProps, Team3 } from './team-3'

export const TEAM_3_META: ComponentRenderer<Team3Slug, Team3RendererProps> = {
  slug: 'team-3',
  component: Team3,
}
