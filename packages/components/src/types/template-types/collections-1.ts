export type Collections1Slug = 'collections-1'

export type CollectionItem1Props = {
  link?: string
  image?: string
  tag?: string
  title?: string
}

export type Collections1Props = {
  headline?: string
  cta_button_label?: string
  cta_link?: string
  collections?: (CollectionItem1Props | undefined)[]
}
