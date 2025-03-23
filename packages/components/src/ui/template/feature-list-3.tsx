import { Icon } from '@iconify/react'
import type { FeaturesList3Props } from '../../types/template-types/features-list-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type FeaturesList3RendererProps = FeaturesList3Props &
  AdditionalPageRendererComponentProps

export function FeaturesList3(props: FeaturesList3RendererProps) {
  const { headline, description, features, disableLink = false } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          {headline && (
            <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
              {headline}
            </h2>
          )}

          {description && (
            <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
              {description}
            </p>
          )}
        </div>

        {features && (
          <div className="pc-grid pc-gap-8 sm:pc-grid-cols-2 md:pc-gap-12 xl:pc-grid-cols-3 xl:pc-gap-16">
            {features.map((feature, featureIndex) => {
              return (
                <div
                  key={featureIndex}
                  className="pc-flex pc-gap-4 md:pc-gap-6"
                >
                  {feature?.icon && (
                    <div className="pc-flex pc-h-12 pc-w-12 pc-shrink-0 pc-items-center pc-justify-center pc-rounded-lg pc-bg-indigo-500 pc-text-white pc-shadow-lg md:pc-h-14 md:pc-w-14 md:pc-rounded-xl">
                      <Icon icon={feature.icon} className="h-6 w-6" />
                    </div>
                  )}

                  <div>
                    <h3 className="pc-mb-2 pc-text-lg pc-font-semibold md:pc-text-xl">
                      {feature?.headline}
                    </h3>
                    <p className="pc-mb-2 pc-text-gray-500">
                      {feature?.description}
                    </p>

                    {feature?.cta_button_label && (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a
                        href={disableLink ? undefined : feature.cta_link}
                        className="pc-font-bold pc-text-indigo-500 pc-transition pc-duration-100 hover:pc-text-indigo-600 active:pc-text-indigo-700"
                      >
                        {feature.cta_button_label}
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
