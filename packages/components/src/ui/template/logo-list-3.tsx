import type { LogoList3Props } from '../../types/template-types/logo-list-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type LogoList3RendererProps = LogoList3Props &
  AdditionalPageRendererComponentProps

export function LogoList3(props: LogoList3RendererProps) {
  const { description, images } = props

  return (
    <section className="pc-mx-auto pc-max-w-7xl pc-px-4 pc-py-24">
      {description && (
        <h1 className="pc-mb-12 pc-text-center pc-text-sm pc-font-bold pc-uppercase pc-tracking-wide pc-text-gray-800">
          {description}
        </h1>
      )}
      {images && (
        <div className="pc-grid pc-grid-cols-2 pc-gap-10 pc-text-center lg:pc-grid-cols-8">
          {images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className="pc-flex pc-items-center pc-justify-center"
            >
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src={image?.image}
                className="pc-block pc-h-12 pc-object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
