export type Blog2Slug = 'blog-2'

export type Blog2BlogProps = {
  image?: string
  title?: string
  date?: string
  link?: string
}

export type Blog2Props = {
  headline?: string
  description?: string
  blog?: (Blog2BlogProps | undefined)[]
}
