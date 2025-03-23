export type Footer2Slug = 'footer-2'

export type FooterLinkProps = {
  label?: string
  link?: string
}

export type FooterCategoryProps = {
  headline?: string
  links?: (FooterLinkProps | undefined)[]
}

export type Footer2SocialProps = {
  slug?: string
  link?: string
}

export type Footer2Props = {
  image?: string
  description?: string
  socials?: (Footer2SocialProps | undefined)[]
  categories?: (FooterCategoryProps | undefined)[]
  copyright?: string
}
