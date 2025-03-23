export type Team1Slug = 'team-1'

export type Team1TeamSocialProps = {
  slug?: string
  link?: string
}

export type Team1TeamProps = {
  name?: string
  position?: string
  image?: string
  socials?: (Team1TeamSocialProps | undefined)[]
}

export type Team1Props = {
  headline?: string
  description?: string
  teams?: (Team1TeamProps | undefined)[]
}
