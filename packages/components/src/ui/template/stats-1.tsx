import type { Stats1Props } from '../../types/template-types/stats-1'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Stats1RendererProps = Stats1Props &
  AdditionalPageRendererComponentProps

export function Stats1(props: Stats1RendererProps) {
  const { headline, description, stats = [] } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-8 md:pc-mb-12">
          <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
            {headline}
          </h2>

          <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
            {description}
          </p>
        </div>

        <div className="pc-grid pc-grid-cols-2 pc-gap-4 md:pc-grid-cols-4 lg:pc-gap-8">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="pc-flex pc-flex-col pc-items-center pc-justify-center pc-rounded-lg pc-bg-gray-100 pc-p-4 lg:pc-p-8"
              >
                <div className="pc-text-xl pc-font-bold pc-text-indigo-500 sm:pc-text-2xl md:pc-text-3xl">
                  {stat?.value}
                </div>
                <div className="pc-text-sm pc-font-semibold sm:pc-text-base">
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
