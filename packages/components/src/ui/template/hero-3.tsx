import type { Hero3Props, Hero3Slug } from '../../types/template-types/hero-3'
import type {
  AdditionalPageRendererComponentProps,
  ComponentRenderer,
} from '../types'

export type Hero3RendererProps = Hero3Props &
  AdditionalPageRendererComponentProps

export function Hero3(props: Hero3RendererProps) {
  const {
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
    <header className="pc-bg-white pc-pb-6 sm:pc-pb-8 lg:pc-pb-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-relative pc-flex pc-min-h-96 pc-flex-1 pc-shrink-0 pc-items-center pc-justify-center pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-py-16 pc-shadow-lg md:pc-py-20 xl:pc-py-48">
          {image && (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              src={image}
              loading="lazy"
              className="pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center"
            />
          )}

          <div className="pc-absolute pc-inset-0 pc-bg-indigo-500 pc-mix-blend-multiply"></div>

          <div className="pc-relative pc-flex pc-flex-col pc-items-center pc-p-4 sm:pc-max-w-xl">
            {sub_headline && (
              <p className="pc-mb-4 pc-text-center pc-text-lg pc-text-indigo-200 sm:pc-text-xl md:pc-mb-8">
                {sub_headline}
              </p>
            )}
            {headline && (
              <h1 className="pc-mb-8 pc-text-center pc-text-4xl pc-font-bold pc-text-white sm:pc-text-5xl md:pc-mb-12 md:pc-text-6xl">
                {headline}
              </h1>
            )}
            {(left_button_label ||
              left_button_link ||
              right_button_label ||
              right_button_label) && (
              <div className="pc-flex pc-w-full pc-flex-col pc-gap-2.5 sm:pc-flex-row sm:pc-justify-center">
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
        </div>
      </div>
    </header>
  )
}

export const HERO_3_META: ComponentRenderer<Hero3Slug, Hero3RendererProps> = {
  slug: 'hero-3',
  component: Hero3,
}
