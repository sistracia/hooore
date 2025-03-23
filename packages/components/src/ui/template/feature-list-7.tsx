import type { FeaturesList7Props } from '../../types/template-types/features-list-7'
import type { AdditionalPageRendererComponentProps } from '../types'

export type FeaturesList7RendererProps = FeaturesList7Props &
  AdditionalPageRendererComponentProps

export function FeaturesList7(props: FeaturesList7RendererProps) {
  const { headline, description, features, disableLink = false } = props

  return (
    <section className="pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20">
      <div className="pc-mb-10 pc-max-w-xl sm:pc-text-center md:pc-mx-auto md:pc-mb-12 lg:pc-max-w-2xl">
        {headline && (
          <h2 className="pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-leading-none pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl md:pc-mx-auto">
            <span className="pc-relative pc-inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="text-blue-gray-100 pc-absolute pc-left-0 pc-top-0 pc-z-0 -pc-ml-20 -pc-mt-8 pc-hidden pc-w-32 sm:pc-block lg:-pc-ml-28 lg:-pc-mt-10 lg:pc-w-32"
              >
                <defs>
                  <pattern
                    id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
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
      {features && (
        <div className="pc-grid pc-gap-8 lg:pc-grid-cols-3">
          {features?.map((feature, featureIndex) => {
            return (
              <div key={featureIndex} className="sm:pc-text-center">
                <div className="pc-mb-4 pc-flex pc-h-16 pc-w-16 pc-items-center pc-justify-center pc-rounded-full pc-bg-indigo-50 sm:pc-mx-auto sm:pc-h-24 sm:pc-w-24">
                  <svg
                    className="pc-h-12 pc-w-12 pc-text-purple-400 sm:pc-h-20 sm:pc-w-20"
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
                <p className="pc-mb-3 pc-max-w-md pc-text-sm pc-text-gray-900 sm:pc-mx-auto">
                  {feature?.description}
                </p>
                {feature?.cta_button_label && (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    href={disableLink ? undefined : feature.cta_link}
                    className="pc-inline-flex pc-items-center pc-font-semibold pc-text-purple-400 pc-transition-colors pc-duration-200 hover:pc-text-purple-800"
                  >
                    {feature?.cta_button_label}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
