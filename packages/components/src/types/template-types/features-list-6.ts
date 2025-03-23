export type FeaturesList6Slug = 'features-list-6'

export type FeatureItem6Props = {
  headline?: string
  description?: string
}

export type FeaturesList6Props = {
  tag?: string
  headline?: string
  description?: string
  features_left?: (FeatureItem6Props | undefined)[]
  features_right?: (FeatureItem6Props | undefined)[]
}
