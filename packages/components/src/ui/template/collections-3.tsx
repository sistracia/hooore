import type { Collections3Props } from '../../types/template-types/collections-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Collections3RendererProps = Collections3Props &
  AdditionalPageRendererComponentProps

export function Collections3(props: Collections3RendererProps) {
  const { headline, collections, disableLink } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        {headline && (
          <h2 className="pc-mb-8 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-12 lg:pc-text-3xl">
            {headline}
          </h2>
        )}

        {collections && (
          <div className="pc-grid pc-gap-4 sm:pc-grid-cols-2 md:pc-gap-6 lg:pc-grid-cols-3 xl:pc-grid-cols-4">
            {collections.map((collection, collectionIndex) => {
              return (
                <div key={collectionIndex}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href={disableLink ? undefined : collection?.link}
                    className="pc-group pc-relative pc-flex pc-h-96 pc-items-end pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-p-4 pc-shadow-lg"
                  >
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      src={collection?.image}
                      loading="lazy"
                      className="group-hover:scale-110 pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200"
                    />
                    <div className="pc-relative pc-flex pc-w-full pc-flex-col pc-rounded-lg pc-bg-white pc-p-4 pc-text-center">
                      {collection?.tag && (
                        <span className="pc-text-gray-500">
                          {collection.tag}
                        </span>
                      )}
                      {collection?.title && (
                        <span className="pc-text-lg pc-font-bold pc-text-gray-800 lg:pc-text-xl">
                          {collection.title}
                        </span>
                      )}
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
