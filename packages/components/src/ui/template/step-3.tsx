import type { Step3Props } from '../../types/template-types/step-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Step3RendererProps = Step3Props &
  AdditionalPageRendererComponentProps

export function Step3(props: Step3RendererProps) {
  const { tag, headline, description, steps } = props
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
        <h2 className="pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-leading-none pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl md:pc-mx-auto">
          <span className="pc-relative pc-inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="pc-absolute pc-left-0 pc-top-0 pc-z-0 -pc-ml-20 -pc-mt-8 pc-hidden pc-w-32 pc-text-gray-100 sm:pc-block lg:-pc-ml-28 lg:-pc-mt-10 lg:pc-w-32"
            >
              <defs>
                <pattern
                  id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                width="52"
                height="24"
              ></rect>
            </svg>
            {headline}
          </span>
        </h2>
        {description && (
          <p className="pc-text-base pc-text-gray-700 md:pc-text-lg">
            {description}
          </p>
        )}
      </div>
      <div className="pc-grid pc-gap-10 sm:pc-grid-cols-2 lg:pc-grid-cols-4">
        {steps?.map((step, index) => {
          return (
            <div key={index}>
              <div className="pc-mb-6 pc-flex pc-items-center pc-justify-between">
                <p className="pc-text-2xl pc-font-bold">{step?.label}</p>
                {index < steps.length - 1 ? (
                  <svg
                    className="pc-w-6 pc-rotate-90 pc-transform pc-text-gray-700 sm:pc-rotate-0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                    ></line>
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="15,5 22,12 15,19 "
                    ></polyline>
                  </svg>
                ) : (
                  <svg
                    className="pc-w-8 pc-text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    ></polyline>
                  </svg>
                )}
              </div>
              <p className="pc-text-gray-600">{step?.value}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
