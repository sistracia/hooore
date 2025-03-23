import { Fragment } from 'react'
import type { Content4Props } from '../../types/template-types/content-4'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Content4RendererProps = Content4Props &
  AdditionalPageRendererComponentProps

export function Content4(props: Content4RendererProps) {
  const { image, headline, sub_headline, description, items } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8">
        <div className="pc-grid pc-gap-8 md:pc-grid-cols-2 lg:pc-gap-12">
          {image && (
            <div>
              <div className="pc-h-64 pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-auto">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={image}
                  loading="lazy"
                  className="pc-h-full pc-w-full pc-object-cover pc-object-center"
                />
              </div>
            </div>
          )}

          <div className="md:pc-pt-8">
            {sub_headline && (
              <p className="pc-text-center pc-font-bold pc-text-indigo-500 md:pc-text-left">
                Who we are
              </p>
            )}

            {headline && (
              <h1 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 sm:pc-text-3xl md:pc-mb-6 md:pc-text-left">
                Our competitive advantage
              </h1>
            )}

            {description && (
              <p className="pc-mb-6 pc-whitespace-pre-line pc-text-gray-500 sm:pc-text-lg md:pc-mb-8">
                {description}
              </p>
            )}

            {items?.map((item, itemIndex) => {
              return (
                <Fragment key={itemIndex}>
                  {item?.headline && (
                    <h2 className="pc-mb-2 pc-text-center pc-text-xl pc-font-semibold pc-text-gray-800 sm:pc-text-2xl md:pc-mb-4 md:pc-text-left">
                      {item.headline}
                    </h2>
                  )}

                  {item?.description && (
                    <p className="pc-mb-6 pc-whitespace-pre-line pc-text-gray-500 sm:pc-text-lg md:pc-mb-8">
                      {item.description}
                    </p>
                  )}
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
