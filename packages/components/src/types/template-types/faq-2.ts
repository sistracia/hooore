export type Faq2Slug = 'faq-2'

export type FaqItemProps = {
  question?: string
  answer?: string
}

export type Faq2Props = {
  headline?: string
  caption?: string
  faq?: (FaqItemProps | undefined)[]
}
