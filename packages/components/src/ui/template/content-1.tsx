import type { Content1Props } from '../../types/template-types/content-1'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Content1RendererProps = Content1Props &
  AdditionalPageRendererComponentProps

export function Content1(props: Content1RendererProps) {
  const { description, headline } = props

  return (
    <section className="pc-flex pc-h-full pc-w-full pc-flex-col pc-items-center pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-items-start sm:pc-px-20 sm:pc-py-20">
      {headline && (
        <div className="pc-flex pc-w-full pc-flex-col pc-gap-6 sm:pc-mr-12 sm:pc-w-fit">
          <h2 className="pc-mb-6 pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h2 sm:pc-mb-0 sm:pc-text-left sm:pc-text-h2-sm">
            {headline}
          </h2>
        </div>
      )}
      {description && (
        <div className="pc-flex pc-h-full pc-flex-col pc-items-center pc-gap-10 sm:pc-items-start sm:pc-pt-40">
          <p className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-cta sm:pc-text-start sm:pc-text-cta-sm">
            {description}
          </p>
        </div>
      )}
    </section>
  )
}
