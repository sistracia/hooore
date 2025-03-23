export type Collections3Slug = 'collections-3'

export type CollectionItem3Props = {
  link?: string
  image?: string
  tag?: string
  title?: string
}

export type Collections3Props = {
  headline?: string
  collections?: (CollectionItem3Props | undefined)[]
}
