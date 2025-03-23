import type { FeaturesList6Props } from '../../types/template-types/features-list-6'
import type { AdditionalPageRendererComponentProps } from '../types'

export type FeaturesList6RendererProps = FeaturesList6Props &
  AdditionalPageRendererComponentProps

export function FeaturesList6(props: FeaturesList6RendererProps) {
  const { tag, headline, description, features_left, features_right } = props

  return (
    <section className="pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20">
      <div className="pc-mb-10 pc-max-w-xl sm:pc-text-center md:pc-mx-auto md:pc-mb-12 lg:pc-max-w-2xl">
        {tag && (
          <div>
            <p className="pc-mb-4 pc-inline-block pc-rounded-full pc-bg-teal-400 pc-px-3 pc-py-px pc-text-xs pc-font-semibold pc-uppercase pc-tracking-wider pc-text-teal-900">
              {tag}
            </p>
          </div>
        )}
        {headline && (
          <h2 className="pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-leading-none pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl md:pc-mx-auto">
            <span className="pc-relative pc-inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="pc-absolute pc-left-0 pc-top-0 pc-z-0 -pc-ml-20 -pc-mt-8 pc-hidden pc-w-32 pc-text-blue-100 sm:pc-block lg:-pc-ml-28 lg:-pc-mt-10 lg:pc-w-32"
              >
                <defs>
                  <pattern
                    id="07690130-d013-42bc-83f4-90de7ac68f76"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
              <span className="pc-relative"></span>
            </span>
            {headline}
          </h2>
        )}
        {description && (
          <p className="pc-text-base pc-text-gray-700 md:pc-text-lg">
            {description}
          </p>
        )}
      </div>
      {(features_left || features_right) && (
        <div className="pc-mx-auto pc-grid pc-max-w-screen-lg pc-space-y-6 lg:pc-grid-cols-2 lg:pc-space-y-0 lg:pc-divide-x">
          <div className="pc-space-y-6 sm:pc-px-16">
            {features_left?.map((feature, featureIndex) => {
              return (
                <div
                  key={featureIndex}
                  className="pc-flex pc-max-w-md pc-flex-col sm:pc-flex-row"
                >
                  <div className="pc-mb-4 pc-mr-4">
                    <div className="pc-flex pc-h-12 pc-w-12 pc-items-center pc-justify-center pc-rounded-full pc-bg-indigo-50">
                      <svg
                        className="pc-h-8 pc-w-8 pc-text-purple-400 sm:pc-h-10 sm:pc-w-10"
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
                  </div>
                  <div>
                    <h6 className="pc-mb-3 pc-text-xl pc-font-bold pc-leading-5">
                      {feature?.headline}
                    </h6>
                    <p className="pc-text-sm pc-text-gray-900">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="pc-space-y-6 sm:pc-px-16">
            {features_right?.map((feature, featureIndex) => {
              return (
                <div
                  key={featureIndex}
                  className="pc-flex pc-max-w-md pc-flex-col sm:pc-flex-row"
                >
                  <div className="pc-mb-4 pc-mr-4">
                    <div className="pc-flex pc-h-12 pc-w-12 pc-items-center pc-justify-center pc-rounded-full pc-bg-indigo-50">
                      <svg
                        className="pc-h-8 pc-w-8 pc-text-purple-400 sm:pc-h-10 sm:pc-w-10"
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
                  </div>
                  <div>
                    <h6 className="pc-mb-3 pc-text-xl pc-font-bold pc-leading-5">
                      {feature?.headline}
                    </h6>
                    <p className="pc-text-sm pc-text-gray-900">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
