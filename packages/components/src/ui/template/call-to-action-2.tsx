import type { CallToAction2Props } from '../../types/template-types/call-to-action-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type CallToAction2RendererProps = CallToAction2Props &
  AdditionalPageRendererComponentProps

export function CallToAction2(props: CallToAction2RendererProps) {
  const {
    background,
    cta_button_label,
    cta_link,
    description,
    headline,
    disableLink = false,
  } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-flex pc-flex-col pc-overflow-hidden pc-rounded-lg pc-bg-gray-900 sm:pc-flex-row md:pc-h-80">
          <div className="pc-flex pc-w-full pc-flex-col pc-p-4 sm:pc-w-1/2 sm:pc-p-8 lg:pc-w-2/5">
            {headline && (
              <h2 className="pc-mb-4 pc-whitespace-pre-line pc-text-xl pc-font-bold pc-text-white md:pc-text-2xl lg:pc-text-4xl">
                {headline}
              </h2>
            )}

            {description && (
              <p className="pc-mb-8 pc-max-w-md pc-text-gray-400">
                {description}
              </p>
            )}

            {cta_button_label && (
              <div className="pc-mt-auto">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href={disableLink ? undefined : cta_link}
                  className="pc-inline-block pc-rounded-lg pc-bg-white pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-800 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-100 focus-visible:pc-ring active:pc-bg-gray-200 md:pc-text-base"
                >
                  {cta_button_label}
                </a>
              </div>
            )}
          </div>

          {background && (
            <div className="pc-order-first pc-h-48 pc-w-full pc-bg-gray-700 sm:pc-order-none sm:pc-h-auto sm:pc-w-1/2 lg:pc-w-3/5">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src={background}
                loading="lazy"
                className="pc-h-full pc-w-full pc-object-cover pc-object-center"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
