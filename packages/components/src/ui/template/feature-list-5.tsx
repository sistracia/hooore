import type { FeaturesList5Props } from '../../types/template-types/features-list-5'
import type { AdditionalPageRendererComponentProps } from '../types'

export type FeaturesList5RendererProps = FeaturesList5Props &
  AdditionalPageRendererComponentProps

export function FeaturesList5(props: FeaturesList5RendererProps) {
  const {
    headline,
    description,
    features,
    left_button_label,
    left_button_link,
    right_button_label,
    right_button_link,
    disableLink = false,
  } = props

  return (
    <section className="pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20">
      <div className="pc-flex pc-flex-col lg:pc-flex-row">
        <div className="pc-mx-auto pc-mb-10 pc-max-w-xl pc-pr-16">
          {headline && (
            <h5 className="pc-mb-6 pc-text-3xl pc-font-extrabold pc-leading-none">
              {headline}
            </h5>
          )}
          {description && (
            <p className="pc-mb-6 pc-text-gray-900">{description}</p>
          )}
          <div className="pc-flex pc-items-center">
            {left_button_label && (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                href={disableLink ? undefined : left_button_link}
                className="focus:pc-shadow-outline pc-mr-6 pc-inline-flex pc-h-12 pc-items-center pc-justify-center pc-rounded pc-bg-purple-400 pc-px-6 pc-font-medium pc-tracking-wide pc-text-white pc-shadow-md pc-transition pc-duration-200 hover:pc-bg-purple-700 focus:pc-outline-none"
              >
                {left_button_label}
              </a>
            )}
            {right_button_label && (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                href={disableLink ? undefined : right_button_link}
                className="pc-inline-flex pc-items-center pc-font-semibold pc-text-purple-400 pc-transition-colors pc-duration-200 hover:pc-text-purple-800"
              >
                {right_button_label}
              </a>
            )}
          </div>
        </div>
        {features && (
          <div className="pc-grid pc-gap-5 sm:pc-grid-cols-2">
            {features.map((feature, featureIndex) => {
              return (
                <div key={featureIndex} className="pc-max-w-md">
                  <div className="pc-mb-4 pc-flex pc-h-16 pc-w-16 pc-items-center pc-justify-center pc-rounded-full pc-bg-indigo-50">
                    <svg
                      className="pc-h-12 pc-w-12 pc-text-purple-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </div>
                  <h6 className="pc-mb-2 pc-font-semibold pc-leading-5">
                    {feature?.headline}
                  </h6>
                  <p className="pc-text-sm pc-text-gray-700">
                    {feature?.description}
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
