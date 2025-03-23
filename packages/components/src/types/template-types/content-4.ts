export type Content4Slug = 'content-4'

export type Content4ItemProps = {
  headline?: string
  description?: string
}

export type Content4Props = {
  image?: string
  sub_headline?: string
  headline?: string
  description?: string
  items?: (Content4ItemProps | undefined)[]
}
