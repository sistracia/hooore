export type Testimonials1Slug = 'testimonials-1'

export type Testimonials1ItemProps = {
  image?: string
  name?: string
  position?: string
  description?: string
}

export type Testimonials1Props = {
  headline?: string
  testimonials?: (Testimonials1ItemProps | undefined)[]
}
