import type { Faq2Props } from '../../types/template-types/faq-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Faq2RendererProps = Faq2Props & AdditionalPageRendererComponentProps

export function Faq2(props: Faq2RendererProps) {
  const { caption, faq, headline } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          {headline && (
            <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
              {headline}
            </h2>
          )}

          {caption && (
            <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
              {caption}
            </p>
          )}
        </div>

        {faq && (
          <div className="pc-grid pc-gap-8 sm:pc-grid-cols-2 sm:pc-gap-y-10 xl:pc-grid-cols-3">
            {faq.map((faq, faqIndex) => {
              return (
                <div
                  key={faqIndex}
                  className="pc-relative pc-rounded-lg pc-bg-gray-100 pc-p-5 pc-pt-8"
                >
                  <span className="pc-absolute -pc-top-4 pc-left-4 pc-inline-flex pc-h-8 pc-w-8 pc-items-center pc-justify-center pc-rounded-full pc-bg-indigo-500 pc-text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pc-h-5 pc-w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <h3 className="pc-mb-3 pc-text-lg pc-font-semibold pc-text-indigo-500 md:pc-text-xl">
                    {faq?.question}
                  </h3>
                  <p className="pc-text-gray-500">{faq?.question}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
