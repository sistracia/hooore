export type Team4Slug = 'team-4'

export type Team4TeamSocialProps = {
  slug?: string
  link?: string
}

export type Team4TeamProps = {
  name?: string
  position?: string
  image?: string
  socials?: (Team4TeamSocialProps | undefined)[]
}

export type Team4Props = {
  headline?: string
  description?: string
  teams?: (Team4TeamProps | undefined)[]
}
