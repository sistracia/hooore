import type { Step2Props } from '../../types/template-types/step-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Step2RendererProps = Step2Props &
  AdditionalPageRendererComponentProps

export function Step2(props: Step2RendererProps) {
  const {
    tag,
    headline,
    description,
    cta_button_label,
    cta_link,
    steps,
    disableLink,
  } = props

  return (
    <section className="pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20">
      <div className="pc-mb-10 pc-max-w-xl sm:pc-text-center md:pc-mx-auto md:pc-mb-12 lg:pc-max-w-2xl">
        <div>
          <p className="pc-mb-4 pc-inline-block pc-rounded-full pc-bg-teal-400 pc-px-3 pc-py-px pc-text-xs pc-font-semibold pc-uppercase pc-tracking-wider pc-text-teal-900">
            {tag}
          </p>
        </div>
        <h2 className="pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-leading-none pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl md:pc-mx-auto">
          <span className="pc-relative pc-inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="pc-absolute pc-left-0 pc-top-0 pc-z-0 -pc-ml-20 -pc-mt-8 pc-hidden pc-w-32 pc-text-gray-100 sm:pc-block lg:-pc-ml-28 lg:-pc-mt-10 lg:pc-w-32"
            >
              <defs>
                <pattern
                  id="d0d83814-78b6-480f-9a5f-7f637616b267"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                width="52"
                height="24"
              ></rect>
            </svg>
            {headline}
          </span>
        </h2>
        <p className="pc-text-base pc-text-gray-700 md:pc-text-lg">
          {description}
        </p>
      </div>
      {steps && (
        <div className="row-gap-5 md:row-gap-8 pc-relative pc-mb-8 pc-grid pc-gap-8 sm:pc-grid-cols-2 lg:pc-grid-cols-4">
          <div className="pc-absolute pc-inset-0 pc-flex pc-items-center pc-justify-center sm:pc-hidden lg:pc-flex">
            <div className="pc-h-full pc-w-px pc-bg-gray-300 lg:pc-h-px lg:pc-w-full"></div>
          </div>
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="pc-transform pc-rounded pc-border pc-bg-white pc-p-5 pc-shadow-sm pc-duration-300 hover:-pc-translate-y-2"
              >
                <div className="pc-mb-2 pc-flex pc-items-center pc-justify-between">
                  <p className="pc-text-lg pc-font-bold pc-leading-5">
                    {step?.label}
                  </p>
                  <p className="pc-flex pc-h-6 pc-w-6 pc-items-center pc-justify-center pc-rounded pc-bg-indigo-50 pc-font-bold pc-text-purple-400">
                    {index + 1}
                  </p>
                </div>
                <p className="pc-text-sm pc-text-gray-900">{step?.value}</p>
              </div>
            )
          })}
        </div>
      )}
      {cta_button_label && (
        <div className="pc-text-center">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href={disableLink ? undefined : cta_link}
            className="focus:pc-shadow-outline pc-inline-flex pc-h-12 pc-w-full pc-items-center pc-justify-center pc-rounded pc-bg-purple-400 pc-px-6 pc-font-medium pc-tracking-wide pc-text-white pc-shadow-md pc-transition pc-duration-200 hover:pc-bg-purple-700 focus:pc-outline-none md:pc-w-auto"
          >
            {cta_button_label}
          </a>
        </div>
      )}
    </section>
  )
}
