export type Stats1Slug = 'stats-1'

export type StatItem1Props = {
  value?: string
  label?: string
}

export type Stats1Props = {
  headline?: string
  description?: string
  stats?: (StatItem1Props | undefined)[]
}
