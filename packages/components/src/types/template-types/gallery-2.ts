export type Gallery2Slug = 'gallery-2'

export type GalleryImage2Props = {
  link?: string
  image?: string
  tag?: string
}

export type Gallery2Props = {
  headline?: string
  description?: string
  cta_button_label?: string
  cta_link?: string
  images?: (GalleryImage2Props | undefined)[]
}
