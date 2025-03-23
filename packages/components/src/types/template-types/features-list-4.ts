export type FeaturesList4Slug = 'features-list-4'

export type FeatureItem4Props = {
  icon?: string
  headline?: string
  description?: string
  cta_button_label?: string
  cta_link?: string
}

export type FeaturesList4Props = {
  headline?: string
  description?: string
  features?: (FeatureItem4Props | undefined)[]
}
