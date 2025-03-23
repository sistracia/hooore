export type Blog1Slug = 'blog-1'

export type Blog1BlogProps = {
  image?: string
  title?: string
  description?: string
  date?: string
  author_name?: string
  author_image?: string
  link?: string
}

export type Blog1Props = {
  headline?: string
  description?: string
  blog?: (Blog1BlogProps | undefined)[]
}
