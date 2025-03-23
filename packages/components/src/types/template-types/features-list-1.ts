export type FeaturesList1Slug = 'features-list-1'

export type FeatureNameProps = {
  name?: string
}

export type FeatureItem1Props = {
  cta_button_label?: string
  cta_link?: string
  image?: string
  headline?: string
  description?: string
  features?: (FeatureNameProps | undefined)[]
}

export type FeaturesList1Props = {
  tag?: string
  headline?: string
  description?: string
  features?: (FeatureItem1Props | undefined)[]
}
