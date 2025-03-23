export type LogoList3Slug = 'logo-list-3'

export type LogoProps = {
  image?: string
}

export type LogoList3Props = {
  description?: string
  images?: (LogoProps | undefined)[]
}
