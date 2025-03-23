import type { Collections2Props } from '../../types/template-types/collections-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Collections2RendererProps = Collections2Props &
  AdditionalPageRendererComponentProps

export function Collections2(props: Collections2RendererProps) {
  const { headline, description, collections, disableLink } = props

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

        {collections && (
          <div className="pc-grid pc-gap-6 sm:pc-grid-cols-2">
            {collections.map((collection, collectionIndex) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={collectionIndex}
                href={disableLink ? undefined : collection?.link}
                className="pc-group pc-relative pc-flex pc-h-80 pc-items-end pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-p-4 pc-shadow-lg"
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={collection?.image}
                  loading="lazy"
                  className="pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"
                />

                <div className="pc-pointer-events-none pc-absolute pc-inset-0 pc-bg-gradient-to-t pc-from-gray-800 pc-via-transparent pc-to-transparent pc-opacity-50"></div>

                <div className="pc-relative pc-flex pc-flex-col">
                  {collection?.tag && (
                    <span className="pc-text-gray-300">{collection.tag}</span>
                  )}
                  {collection?.title && (
                    <span className="pc-text-lg pc-font-semibold pc-text-white lg:pc-text-xl">
                      {collection.title}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
