export type Hero1Slug = 'hero-1'

export type Hero1SocialProps = {
  slug?: string
  link?: string
}

export type Hero1Props = {
  background?: string
  sub_headline?: string
  headline?: string
  description?: string
  tag?: string
  socials?: (Hero1SocialProps | undefined)[]
  meta?: string
}
