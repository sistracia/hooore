export type Gallery3Slug = 'gallery-3'

export type GalleryImage3Props = {
  link?: string
  image?: string
  tag?: string
}

export type Gallery3Props = {
  headline?: string
  description?: string
  cta_button_label?: string
  cta_link?: string
  images?: (GalleryImage3Props | undefined)[]
}
