export type Faq4Slug = 'faq-4'

export type FaqItemProps = {
  question?: string
  answer?: string
}

export type Faq4Props = {
  headline?: string
  caption?: string
  faq?: (FaqItemProps | undefined)[]
}
