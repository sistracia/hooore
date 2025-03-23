export type Hero5Slug = 'hero-5'

export type Hero51SocialProps = {
  slug?: string
  link?: string
}

export type Hero5Props = {
  sub_headline?: string | undefined
  headline?: string | undefined
  left_button_label?: string | undefined
  left_button_link?: string | undefined
  right_button_label?: string | undefined
  right_button_link?: string | undefined
  image?: string | undefined
  socials?: (Hero51SocialProps | undefined)[]
}
