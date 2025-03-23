import type { FeaturesList2Props } from '../../types/template-types/features-list-2'
import type { AdditionalPageRendererComponentProps } from '../types'

import { FeatureItem } from './feature-list-1'

export type FeaturesList2RendererProps = FeaturesList2Props &
  AdditionalPageRendererComponentProps

export function FeaturesList2(props: FeaturesList2RendererProps) {
  const { background, images, features } = props

  return (
    <section className="pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20">
      <FeatureItem
        image={background}
        features={features}
        direction="horizontal"
        footer={
          images && (
            <div className="pc-flex pc-flex-wrap pc-justify-center pc-gap-6 sm:pc-justify-start">
              {images.map((image, imageIndex) => {
                return (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <img key={imageIndex} src={image?.image} loading="lazy" />
                )
              })}
            </div>
          )
        }
      />
    </section>
  )
}
