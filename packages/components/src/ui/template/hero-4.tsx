import { Icon } from '@iconify/react'
import type { Hero4Props, Hero4Slug } from '../../types/template-types/hero-4'
import type {
  AdditionalPageRendererComponentProps,
  ComponentRenderer,
} from '../types'

export type Hero4RendererProps = Hero4Props &
  AdditionalPageRendererComponentProps

export function Hero4(props: Hero4RendererProps) {
  const {
    disableLink,
    headline,
    sub_headline,
    left_button_label,
    left_button_link,
    right_button_label,
    right_button_link,
    image,
    stats,
    socials,
  } = props

  return (
    <header className="pc-p-4">
      <section className="pc-mb-8 pc-flex pc-flex-col pc-justify-between pc-gap-6 sm:pc-gap-10 md:pc-mb-16 md:pc-gap-16 lg:pc-flex-row">
        <div className="pc-flex pc-flex-col pc-justify-center sm:pc-text-center lg:pc-py-12 lg:pc-text-left xl:pc-w-5/12">
          <p className="pc-mb-4 pc-font-semibold pc-text-indigo-500 md:pc-mb-6 md:pc-text-lg xl:pc-text-xl">
            {sub_headline}
          </p>

          <h1 className="pc-mb-8 pc-text-4xl pc-font-bold pc-text-black sm:pc-text-5xl md:pc-mb-12 md:pc-text-6xl">
            {headline}
          </h1>

          {(left_button_label ||
            left_button_link ||
            right_button_label ||
            right_button_label) && (
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

        <div className="pc-h-48 pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg lg:pc-h-96 xl:pc-w-5/12">
          {image && (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              src={image}
              loading="lazy"
              className="pc-h-full pc-w-full pc-object-cover pc-object-center"
            />
          )}
        </div>
      </section>

      <section className="pc-flex pc-flex-col pc-items-center pc-justify-between pc-gap-10 pc-border-t pc-pt-8 lg:pc-flex-row lg:pc-gap-8">
        <div className="-pc-mx-6 pc-grid pc-grid-cols-2 pc-gap-4 md:-pc-mx-8 md:pc-flex md:pc-divide-x">
          {stats?.map((stat, statIndex) => {
            return (
              <div key={statIndex} className="pc-px-6 md:pc-px-8">
                <span className="pc-block pc-text-center pc-text-lg pc-font-bold pc-text-indigo-500 md:pc-text-left md:pc-text-xl">
                  {stat?.stat}
                </span>
                <span className="pc-block pc-text-center pc-text-sm pc-font-semibold pc-text-gray-800 md:pc-text-left md:pc-text-base">
                  {stat?.label}
                </span>
              </div>
            )
          })}
        </div>
        <div className="pc-flex pc-items-center pc-justify-center pc-gap-4 lg:pc-justify-start">
          <span className="pc-text-sm pc-font-semibold pc-uppercase pc-tracking-widest pc-text-gray-400 sm:pc-text-base">
            Social
          </span>
          <span className="pc-h-px pc-w-12 pc-bg-gray-200"></span>

          <div className="pc-flex pc-gap-4">
            {socials?.map((social, socialIndex) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={socialIndex}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={disableLink ? undefined : social?.link}
                  className="pc-text-gray-400 pc-transition pc-duration-100 hover:pc-text-gray-500 active:pc-text-gray-600"
                >
                  {social?.slug && (
                    <Icon icon={social.slug} className="pc-h-5 pc-w-5" />
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </header>
  )
}

export const HERO_4_META: ComponentRenderer<Hero4Slug, Hero4RendererProps> = {
  slug: 'hero-4',
  component: Hero4,
}
