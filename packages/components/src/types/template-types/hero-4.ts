export type Hero4Slug = 'hero-4'

export type Hero4StatProps = {
  label?: string
  stat?: string
}

export type Hero41SocialProps = {
  slug?: string
  link?: string
}

export type Hero4Props = {
  sub_headline?: string | undefined
  headline?: string | undefined
  left_button_label?: string | undefined
  left_button_link?: string | undefined
  right_button_label?: string | undefined
  right_button_link?: string | undefined
  image?: string | undefined
  stats?: (Hero4StatProps | undefined)[]
  socials?: (Hero41SocialProps | undefined)[]
}
