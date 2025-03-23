import type { CallToAction5Props } from '../../types/template-types/call-to-action-5'
import type { AdditionalPageRendererComponentProps } from '../types'

export type CallToAction5RendererProps = CallToAction5Props &
  AdditionalPageRendererComponentProps

export function CallToAction5(props: CallToAction5RendererProps) {
  const {
    cta_button_label,
    cta_link,
    sub_headline,
    headline,
    disableLink = false,
  } = props

  return (
    <section className="pc-grid pc-grid-cols-1 pc-items-center pc-justify-center pc-px-4 pc-py-24 pc-text-center lg:pc-grid-cols-3">
      <div className="pc-col-auto lg:pc-col-start-2">
        {sub_headline && (
          <p className="pc-mb-2 pc-text-base pc-font-semibold pc-text-purple-400">
            {sub_headline}
          </p>
        )}
        {headline && (
          <h2 className="pc-mb-6 pc-font-serif pc-text-3xl pc-font-normal pc-tracking-tight md:pc-mb-6 md:pc-text-4xl md:pc-leading-tight">
            {headline}
          </h2>
        )}
        {cta_button_label && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href={disableLink ? undefined : cta_link}
            className="pc-w-full pc-rounded pc-bg-purple-400 pc-p-4 pc-text-lg pc-text-white pc-shadow-xl sm:pc-w-auto"
          >
            {cta_button_label}
          </a>
        )}
      </div>
    </section>
  )
}
