export type Stats2Slug = 'stats-2'

export type StatItem2Props = {
  value?: string
  label?: string
}

export type Stats2Props = {
  headline?: string
  description?: string
  stats?: (StatItem2Props | undefined)[]
}
