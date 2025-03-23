export type Faq1Slug = 'faq-1'

export type FaqItemProps = {
  question?: string
  answer?: string
}

export type Faq1Props = {
  tag?: string
  headline?: string
  caption?: string
  faq?: (FaqItemProps | undefined)[]
}
