export type Collections2Slug = 'collections-2'

export type CollectionItem2Props = {
  link?: string
  image?: string
  tag?: string
  title?: string
}

export type Collections2Props = {
  headline?: string
  description?: string
  collections?: (CollectionItem2Props | undefined)[]
}
