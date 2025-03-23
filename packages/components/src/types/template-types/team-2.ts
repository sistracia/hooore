export type Team2Slug = 'team-2'

export type Team2TeamSocialProps = {
  slug?: string
  link?: string
}

export type Team2TeamProps = {
  name?: string
  position?: string
  image?: string
  socials?: (Team2TeamSocialProps | undefined)[]
}

export type Team2Props = {
  headline?: string
  description?: string
  teams?: (Team2TeamProps | undefined)[]
}
