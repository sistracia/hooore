export type Testimonials2Slug = 'testimonials-2'

export type Testimonials2ItemProps = {
  headline?: string
  description?: string
  name?: string
}

export type Testimonials2Props = {
  headline?: string
  description?: string
  testimonials?: (Testimonials2ItemProps | undefined)[]
}
