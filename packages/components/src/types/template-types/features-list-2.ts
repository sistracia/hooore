export type FeaturesList2Slug = 'features-list-2'

export type FeatureNameProps = {
  name?: string
}

export type ImageProps = {
  image?: string
}

export type FeaturesList2Props = {
  background?: string
  features?: (FeatureNameProps | undefined)[]
  images?: (ImageProps | undefined)[]
}
