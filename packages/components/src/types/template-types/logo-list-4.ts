export type LogoList4Slug = 'logo-list-4'

export type LogoProps = {
  image?: string
}

export type LogoList4Props = {
  title?: string
  description?: string
  cta_button_label?: string
  cta_link?: string
  images?: (LogoProps | undefined)[]
}
