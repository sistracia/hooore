export type Footer3Slug = 'footer-3'

export type FooterLinkProps = {
  label?: string
  link?: string
}

export type Footer3SocialProps = {
  slug?: string
  link?: string
}

export type Footer3Props = {
  links?: (FooterLinkProps | undefined)[]
  socials?: (Footer3SocialProps | undefined)[]
  copyright?: string
}
