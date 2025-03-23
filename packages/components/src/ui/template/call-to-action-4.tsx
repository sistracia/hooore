import type { CallToAction4Props } from '../../types/template-types/call-to-action-4'
import type { AdditionalPageRendererComponentProps } from '../types'

export type CallToAction4RendererProps = CallToAction4Props &
  AdditionalPageRendererComponentProps

export function CallToAction4(props: CallToAction4RendererProps) {
  const {
    cta_button_label,
    cta_link,
    description,
    headline,
    disableLink = false,
  } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-flex pc-flex-col pc-items-center pc-justify-between pc-gap-4 pc-rounded-lg pc-bg-gray-100 pc-p-4 sm:pc-flex-row md:pc-p-8">
          <div>
            {headline && (
              <h2 className="pc-text-xl pc-font-bold pc-text-indigo-500 md:pc-text-2xl">
                {headline}
              </h2>
            )}
            {description && <p className="pc-text-gray-600">{description}</p>}
          </div>

          {cta_button_label && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              href={disableLink ? undefined : cta_link}
              className="pc-inline-block pc-rounded-lg pc-bg-indigo-500 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-white pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-indigo-600 focus-visible:pc-ring active:pc-bg-indigo-700 md:pc-text-base"
            >
              {cta_button_label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
