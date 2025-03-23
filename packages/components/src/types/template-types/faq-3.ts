export type Faq3Slug = 'faq-3'

export type FaqItemProps = {
  question?: string
  answer?: string
}

export type Faq3Props = {
  headline?: string
  caption?: string
  faq?: (FaqItemProps | undefined)[]
}
