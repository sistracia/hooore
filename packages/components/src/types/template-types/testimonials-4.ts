export type Testimonials4Slug = 'testimonials-4'

export type Testimonials4ItemProps = {
  image?: string
  name?: string
  description?: string
}

export type Testimonials4Props = {
  headline?: string
  testimonials?: (Testimonials4ItemProps | undefined)[]
}
