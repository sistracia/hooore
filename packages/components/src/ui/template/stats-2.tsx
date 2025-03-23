import type { Stats2Props } from '../../types/template-types/stats-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Stats2RendererProps = Stats2Props &
  AdditionalPageRendererComponentProps

export function Stats2(props: Stats2RendererProps) {
  const { headline, description, stats = [] } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-lg pc-px-4 md:pc-px-8">
        <div className="pc-mb-8 md:pc-mb-12">
          <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
            {headline}
          </h2>

          <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
            {description}
          </p>
        </div>

        <div className="pc-grid pc-grid-cols-2 pc-gap-6 pc-rounded-lg pc-bg-indigo-500 pc-p-6 md:pc-grid-cols-4 md:pc-gap-8 md:pc-p-8">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="pc-flex pc-flex-col pc-items-center">
                <div className="pc-text-xl pc-font-bold pc-text-white sm:pc-text-2xl md:pc-text-3xl">
                  {stat?.value}
                </div>
                <div className="pc-text-sm pc-text-indigo-200 sm:pc-text-base">
                  {stat?.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
