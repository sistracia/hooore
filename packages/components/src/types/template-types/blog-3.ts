export type Blog3Slug = 'blog-3'

export type Blog3BlogProps = {
  image?: string
  title?: string
  description?: string
  date?: string
  link?: string
}

export type Blog3Props = {
  headline?: string
  description?: string
  blog?: (Blog3BlogProps | undefined)[]
}
