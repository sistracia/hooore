import { cn } from '@hooore/utils'
import type { Gallery2Props } from '../../types/template-types/gallery-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Gallery2RendererProps = Gallery2Props &
  AdditionalPageRendererComponentProps

export function Gallery2(props: Gallery2RendererProps) {
  const {
    headline,
    description,
    cta_button_label,
    cta_link,
    images,
    disableLink,
  } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-4 pc-flex pc-items-center pc-justify-between pc-gap-8 sm:pc-mb-8 md:pc-mb-12">
          <div className="pc-flex pc-items-center pc-gap-12">
            {headline && (
              <h2 className="pc-text-2xl pc-font-bold pc-text-gray-800 lg:pc-text-3xl">
                {headline}
              </h2>
            )}

            {description && (
              <p className="pc-hidden pc-max-w-screen-sm pc-text-gray-500 md:pc-block">
                {description}
              </p>
            )}
          </div>

          {cta_button_label && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              href={disableLink ? undefined : cta_link}
              className="pc-inline-block pc-rounded-lg pc-border pc-bg-white pc-px-4 pc-py-2 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-500 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-100 focus-visible:pc-ring active:pc-bg-gray-200 md:pc-px-8 md:pc-py-3 md:pc-text-base"
            >
              {cta_button_label}
            </a>
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
                  className={cn(
                    'pc-group pc-relative pc-flex pc-h-48 pc-items-end pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-80',
                    (imageIndex % 4 === 1 || (imageIndex - 2) % 4 === 0) &&
                      'md:pc-col-span-2',
                  )}
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    src={image?.image}
                    loading="lazy"
                    className="pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"
                  />

                  <div className="pc-pointer-events-none pc-absolute pc-inset-0 pc-bg-gradient-to-t pc-from-gray-800 pc-via-transparent pc-to-transparent pc-opacity-50"></div>

                  {image?.tag && (
                    <span className="pc-relative pc-mb-3 pc-ml-4 pc-inline-block pc-text-sm pc-text-white md:pc-ml-5 md:pc-text-lg">
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
