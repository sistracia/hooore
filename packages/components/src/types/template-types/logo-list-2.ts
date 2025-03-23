export type LogoList2Slug = 'logo-list-2'

export type LogoProps = {
  image?: string
}

export type LogoList2Props = {
  description?: string
  cta_button_label?: string
  cta_link?: string
  images?: (LogoProps | undefined)[]
}
