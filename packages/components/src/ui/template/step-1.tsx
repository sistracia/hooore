import type { Step1Props } from '../../types/template-types/step-1'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Step1RendererProps = Step1Props &
  AdditionalPageRendererComponentProps

export function Step1(props: Step1RendererProps) {
  const { steps, image } = props
  return (
    <section className="pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20">
      <div className="row-gap-10 pc-grid pc-gap-6 lg:pc-grid-cols-2">
        {steps && (
          <div className="lg:pc-py-6 lg:pc-pr-16">
            {steps.map((step, index) => {
              return (
                <div className="pc-flex" key={index}>
                  <div className="pc-mr-4 pc-flex pc-flex-col pc-items-center">
                    <div>
                      <div className="pc-flex pc-h-10 pc-w-10 pc-items-center pc-justify-center pc-rounded-full pc-border">
                        {index === steps.length - 1 && (
                          <svg
                            className="pc-w-6 pc-text-gray-600"
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
                        {index !== steps.length - 1 && (
                          <svg
                            className="pc-w-4 pc-text-gray-600"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <line
                              fill="none"
                              strokeMiterlimit="10"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                            ></line>
                            <polyline
                              fill="none"
                              strokeMiterlimit="10"
                              points="19,15 12,22 5,15"
                            ></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="pc-h-full pc-w-px pc-bg-gray-300"></div>
                    )}
                  </div>
                  <div className="pc-pb-8 pc-pt-1">
                    <p className="pc-mb-2 pc-text-lg pc-font-bold">
                      {step?.label}
                    </p>
                    {step?.value && (
                      <p className="pc-text-gray-700">{step.value}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="pc-relative">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            className="pc-inset-0 pc-h-96 pc-w-full pc-rounded pc-object-cover pc-object-bottom pc-shadow-lg lg:pc-absolute lg:pc-h-full"
            src={image}
          />
        </div>
      </div>
    </section>
  )
}
