export type Team3Slug = 'team-3'

export type Team3TeamProps = {
  name?: string
  position?: string
  image?: string
}

export type Team3Props = {
  headline?: string
  description?: string
  teams?: (Team3TeamProps | undefined)[]
}
