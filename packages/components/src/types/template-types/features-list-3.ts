export type FeaturesList3Slug = 'features-list-3'

export type FeatureItem3Props = {
  icon?: string
  headline?: string
  description?: string
  cta_button_label?: string
  cta_link?: string
}

export type FeaturesList3Props = {
  headline?: string
  description?: string
  features?: (FeatureItem3Props | undefined)[]
}
