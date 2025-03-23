import { Icon } from '@iconify/react'
import type { Hero6Props } from '../../types/template-types/hero-6'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Hero6RendererProps = Hero6Props &
  AdditionalPageRendererComponentProps

export function Hero6(props: Hero6RendererProps) {
  const {
    disableLink,
    headline,
    sub_headline,
    left_button_label,
    left_button_link,
    right_button_label,
    right_button_link,
    socials,
  } = props

  return (
    <header className="pc-flex pc-flex-col pc-items-center pc-p-4">
      <div className="pc-flex pc-max-w-xl pc-flex-col pc-items-center pc-pb-16 pc-pt-8 pc-text-center lg:pc-pb-48 lg:pc-pt-32">
        <p className="pc-mb-4 pc-font-semibold pc-text-indigo-500 md:pc-mb-6 md:pc-text-lg xl:pc-text-xl">
          {headline}
        </p>

        <h1 className="pc-mb-8 pc-text-4xl pc-font-bold pc-text-black sm:pc-text-5xl md:pc-mb-12 md:pc-text-6xl">
          {sub_headline}
        </h1>

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
                href={disableLink ? undefined : left_button_link}
                className="pc-inline-block pc-rounded-lg pc-bg-gray-200 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-500 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-300 focus-visible:pc-ring active:pc-text-gray-700 md:pc-text-base"
              >
                {left_button_label}
              </a>
            )}
          </div>
        )}
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
    </header>
  )
}
