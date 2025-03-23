import type { Gallery1Props } from '../../types/template-types/gallery-1'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Gallery1RendererProps = Gallery1Props &
  AdditionalPageRendererComponentProps

export function Gallery1(props: Gallery1RendererProps) {
  const { headline, description, images, disableLink = false } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          {headline && (
            <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
              {headline}
            </h2>
          )}

          {description && (
            <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
              {description}
            </p>
          )}
        </div>

        {images && (
          <div className="pc-grid pc-grid-cols-2 pc-gap-4 sm:pc-grid-cols-3 md:pc-gap-6 xl:pc-gap-8">
            {images.map((image, imageIndex) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={imageIndex}
                  href={disableLink ? undefined : image?.link}
                  className="pc-group pc-relative pc-flex pc-h-48 pc-items-end pc-justify-end pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-96"
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    src={image?.image}
                    loading="lazy"
                    className="pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"
                  />
                  <div className="pc-pointer-events-none pc-absolute pc-inset-0 pc-bg-gradient-to-t pc-from-gray-800 pc-via-transparent pc-to-transparent pc-opacity-50"></div>
                  {image?.tag && (
                    <span className="pc-relative pc-mb-3 pc-mr-3 pc-inline-block pc-rounded-lg pc-border pc-border-gray-500 pc-px-2 pc-py-1 pc-text-xs pc-text-gray-200 pc-backdrop-blur md:pc-px-3 md:pc-text-sm">
                      {image.tag}
                    </span>
                  )}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
