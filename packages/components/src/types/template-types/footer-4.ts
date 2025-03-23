export type Footer4Slug = 'footer-4'

export type FooterLinkProps = {
  label?: string
  link?: string
}

export type Footer4SocialProps = {
  slug?: string
  link?: string
}

export type Footer4Props = {
  image?: string
  description?: string
  links?: (FooterLinkProps | undefined)[]
  socials?: (Footer4SocialProps | undefined)[]
}
