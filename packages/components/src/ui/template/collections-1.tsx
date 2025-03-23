import type { Collections1Props } from '../../types/template-types/collections-1'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Collections1RendererProps = Collections1Props &
  AdditionalPageRendererComponentProps

export function Collections1(props: Collections1RendererProps) {
  const { headline, cta_button_label, cta_link, collections, disableLink } =
    props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-6 pc-flex pc-items-end pc-justify-between pc-gap-4">
          {headline && (
            <h2 className="pc-text-2xl pc-font-bold pc-text-gray-800 lg:pc-text-3xl">
              {headline}
            </h2>
          )}

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

        {collections && (
          <div className="pc-grid pc-gap-x-4 pc-gap-y-6 sm:pc-grid-cols-2 md:pc-gap-x-6 lg:pc-grid-cols-3 xl:pc-grid-cols-4">
            {collections.map((collection, index) => {
              return (
                <div key={index}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href={disableLink ? undefined : collection?.link}
                    className="pc-group pc-mb-2 pc-block pc-h-96 pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg lg:pc-mb-3"
                  >
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      src={collection?.image}
                      loading="lazy"
                      className="pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"
                    />
                  </a>

                  <div className="pc-flex pc-flex-col">
                    <span className="pc-text-gray-500">{collection?.tag}</span>
                    {collection?.title && (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a
                        href={disableLink ? undefined : collection?.link}
                        className="pc-text-lg pc-font-bold pc-text-gray-800 pc-transition pc-duration-100 hover:pc-text-gray-500 lg:pc-text-xl"
                      >
                        {collection?.title}
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
