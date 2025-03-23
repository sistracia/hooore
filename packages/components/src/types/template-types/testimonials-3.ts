export type Testimonials3Slug = 'testimonials-3'

export type Testimonials3ItemProps = {
  image?: string
  name?: string
  description?: string
}

export type Testimonials3Props = {
  headline?: string
  testimonials?: (Testimonials3ItemProps | undefined)[]
}
