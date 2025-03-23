export type Gallery1Slug = 'gallery-1'

export type GalleryImage1Props = {
  link?: string
  image?: string
  tag?: string
}

export type Gallery1Props = {
  headline?: string
  description?: string
  images?: (GalleryImage1Props | undefined)[]
}
