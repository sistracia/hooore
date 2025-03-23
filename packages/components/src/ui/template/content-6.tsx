import { Icon } from '@iconify/react'
import type { Content6Props } from '../../types/template-types/content-6'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Content6RendererProps = Content6Props &
  AdditionalPageRendererComponentProps

export function Content6(props: Content6RendererProps) {
  const {
    icon,
    headline,
    description,
    cta_button_label,
    cta_link,
    image1,
    image2,
    image3,
    disableLink,
  } = props

  return (
    <section className="pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20">
      <div className="pc-grid pc-gap-10 lg:pc-grid-cols-2">
        <div className="pc-flex pc-flex-col pc-justify-center md:pc-pr-8 lg:pc-max-w-lg xl:pc-pr-0">
          {icon && (
            <div className="pc-mb-4 pc-flex pc-h-16 pc-w-16 pc-items-center pc-justify-center pc-rounded-full pc-bg-teal-400">
              <Icon icon={icon} className="pc-h-2/3 pc-w-2/3" />
            </div>
          )}
          <div className="pc-mb-6 pc-max-w-xl">
            {headline && (
              <h2 className="pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl sm:pc-leading-none">
                {headline}
              </h2>
            )}
            {description && (
              <p className="pc-text-base pc-text-gray-700 md:pc-text-lg">
                {description}
              </p>
            )}
          </div>
          {cta_button_label && (
            <div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={disableLink ? undefined : cta_link}
                className="pc-inline-flex pc-items-center pc-font-semibold pc-text-purple-400 pc-transition-colors pc-duration-200 hover:pc-text-purple-800"
              >
                Learn more
                <svg
                  className="pc-ml-2 pc-inline-block pc-w-3"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>
            </div>
          )}
        </div>
        <div className="-pc-mx-4 pc-flex pc-items-center pc-justify-center lg:pc-pl-8">
          <div className="pc-flex pc-flex-col pc-items-end pc-px-3">
            {image1 && (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                className="pc-mb-6 pc-h-28 pc-w-28 pc-rounded pc-object-cover pc-shadow-lg sm:pc-h-48 sm:pc-w-48 xl:pc-h-56 xl:pc-w-56"
                src={image1}
              />
            )}
            {image2 && (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                className="pc-h-20 pc-w-20 pc-rounded pc-object-cover pc-shadow-lg sm:pc-h-32 sm:pc-w-32 xl:pc-h-40 xl:pc-w-40"
                src={image2}
              />
            )}
          </div>
          <div className="pc-px-3">
            {image3 && (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                className="pc-h-40 pc-w-40 pc-rounded pc-object-cover pc-shadow-lg sm:pc-h-64 sm:pc-w-64 xl:pc-h-80 xl:pc-w-80"
                src={image3}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
