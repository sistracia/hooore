export type Stats3Slug = 'stats-3'

export type StatItem3Props = {
  value?: string
  label?: string
}

export type Stats3Props = {
  headline?: string
  description?: string
  image?: string
  stats?: (StatItem3Props | undefined)[]
}
