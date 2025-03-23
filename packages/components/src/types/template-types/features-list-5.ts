export type FeaturesList5Slug = 'features-list-5'

export type FeatureItem5Props = {
  headline?: string
  description?: string
}

export type FeaturesList5Props = {
  headline?: string
  description?: string
  left_button_label?: string
  left_button_link?: string
  right_button_label?: string
  right_button_link?: string
  features?: (FeatureItem5Props | undefined)[]
}
