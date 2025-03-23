export type FeaturesList7Slug = 'features-list-7'

export type FeatureItem7Props = {
  headline?: string
  description?: string
  cta_button_label?: string
  cta_link?: string
}

export type FeaturesList7Props = {
  headline?: string
  description?: string
  features?: (FeatureItem7Props | undefined)[]
}
