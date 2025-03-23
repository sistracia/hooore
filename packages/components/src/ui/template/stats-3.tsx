import type { Stats3Props } from '../../types/template-types/stats-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Stats3RendererProps = Stats3Props &
  AdditionalPageRendererComponentProps

export function Stats3(props: Stats3RendererProps) {
  const { headline, description, image, stats = [] } = props
  return (
    <section className="body-font pc-text-gray-600">
      <div className="pc-container pc-mx-auto pc-flex pc-flex-wrap pc-px-5 pc-py-24">
        <div className="-pc-mx-4 pc-mb-auto pc-mt-auto pc-flex pc-flex-wrap pc-content-start sm:pc-w-2/3 sm:pc-pr-10 lg:pc-w-1/2">
          <div className="pc-mb-6 pc-w-full pc-px-4 sm:pc-p-4">
            <h1 className="pc-mb-2 pc-text-xl pc-font-medium pc-text-gray-900">
              {headline}
            </h1>
            <div className="pc-leading-relaxed">{description}</div>
          </div>
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="pc-w-1/2 pc-p-4 sm:pc-w-1/2 lg:pc-w-1/4"
              >
                <h2 className="pc-text-3xl pc-font-medium pc-text-gray-900">
                  {stat?.value}
                </h2>
                <p className="pc-leading-relaxed">{stat?.label}</p>
              </div>
            )
          })}
        </div>
        {image && (
          <div className="pc-mt-6 pc-w-full pc-overflow-hidden pc-rounded-lg sm:pc-mt-0 sm:pc-w-1/3 lg:pc-w-1/2">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className="pc-h-full pc-w-full pc-object-cover pc-object-center"
              src={image}
            />
          </div>
        )}
      </div>
    </section>
  )
}
