import type { Hero2Props } from '../../types/template-types/hero-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Hero2RendererProps = Hero2Props &
  AdditionalPageRendererComponentProps

export function Hero2(props: Hero2RendererProps) {
  const {
    description,
    disableLink,
    headline,
    image,
    left_button_label,
    left_button_link,
    right_button_label,
    right_button_link,
    sub_headline,
  } = props

  return (
    <header className="pc-bg-white pc-p-6 sm:pc-p-8 lg:pc-p-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-flex pc-flex-col pc-justify-between pc-gap-6 sm:pc-gap-10 md:pc-gap-16 lg:pc-flex-row">
          <div className="pc-flex pc-flex-col pc-justify-center sm:pc-text-center lg:pc-py-12 lg:pc-text-left xl:pc-w-5/12 xl:pc-py-24">
            {sub_headline && (
              <p className="pc-mb-4 pc-font-semibold pc-text-indigo-500 md:pc-mb-6 md:pc-text-lg xl:pc-text-xl">
                {sub_headline}
              </p>
            )}

            {headline && (
              <h1 className="pc-mb-8 pc-text-4xl pc-font-bold pc-text-black sm:pc-text-5xl md:pc-mb-12 md:pc-text-6xl">
                {headline}
              </h1>
            )}

            {description && (
              <p className="pc-mb-8 pc-leading-relaxed pc-text-gray-500 md:pc-mb-12 lg:pc-w-4/5 xl:pc-text-lg">
                {description}
              </p>
            )}

            {(left_button_label ||
              left_button_link ||
              right_button_label ||
              right_button_link) && (
              <div className="pc-flex pc-flex-col pc-gap-2.5 sm:pc-flex-row sm:pc-justify-center lg:pc-justify-start">
                {(left_button_label || left_button_link) && (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={disableLink ? undefined : left_button_link}
                    className="pc-inline-block pc-rounded-lg pc-bg-indigo-500 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-white pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-indigo-600 focus-visible:pc-ring active:pc-bg-indigo-700 md:pc-text-base"
                  >
                    {left_button_label}
                  </a>
                )}

                {(right_button_label || right_button_link) && (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={disableLink ? undefined : right_button_link}
                    className="pc-inline-block pc-rounded-lg pc-bg-gray-200 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-500 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-300 focus-visible:pc-ring active:pc-text-gray-700 md:pc-text-base"
                  >
                    {right_button_label}
                  </a>
                )}
              </div>
            )}
          </div>
          {image && (
            <div className="pc-h-48 pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg lg:pc-h-auto xl:pc-w-5/12">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src={image}
                loading="lazy"
                className="pc-h-full pc-w-full pc-object-cover pc-object-center"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
