export type Hero6Slug = 'hero-6'

export type Hero61SocialProps = {
  slug?: string
  link?: string
}

export type Hero6Props = {
  sub_headline?: string | undefined
  headline?: string | undefined
  left_button_label?: string | undefined
  left_button_link?: string | undefined
  right_button_label?: string | undefined
  right_button_link?: string | undefined
  socials?: (Hero61SocialProps | undefined)[]
}
