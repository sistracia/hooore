import type { Content7Props } from '../../types/template-types/content-7'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Content7RendererProps = Content7Props &
  AdditionalPageRendererComponentProps

export function Content7(props: Content7RendererProps) {
  const {
    sub_headline,
    headline,
    description,
    image,
    cta_description,
    cta_button_label,
    cta_link,
    disableLink,
  } = props

  return (
    <div className="pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20">
      <div className="pc-mx-auto sm:pc-text-center lg:pc-max-w-2xl">
        <div className="pc-mb-10 pc-max-w-xl sm:pc-text-center md:pc-mx-auto md:pc-mb-12 lg:pc-max-w-2xl">
          {sub_headline && (
            <div>
              <p className="pc-mb-4 pc-inline-block pc-rounded-full pc-bg-teal-400 pc-px-3 pc-py-px pc-text-xs pc-font-semibold pc-uppercase pc-tracking-wider pc-text-teal-900">
                Brand new
              </p>
            </div>
          )}
          {headline && (
            <h2 className="pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-leading-none pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl md:pc-mx-auto">
              <span className="pc-relative pc-inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="pc-absolute pc-left-0 pc-top-0 pc-z-0 -pc-ml-20 -pc-mt-8 pc-hidden pc-w-32 pc-text-gray-100 sm:pc-block lg:-pc-ml-28 lg:-pc-mt-10 lg:pc-w-32"
                >
                  <defs>
                    <pattern
                      id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span className="pc-relative"></span>
              </span>
              {headline}
            </h2>
          )}
          {description && (
            <p className="pc-text-base pc-text-gray-700 md:pc-text-lg">
              {description}
            </p>
          )}
        </div>
        <div className="pc-mb-4 pc-transition-shadow pc-duration-300 hover:pc-shadow-xl lg:pc-mb-6">
          {image && (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              className="pc-h-56 pc-w-full pc-rounded pc-object-cover pc-shadow-lg sm:pc-h-64 md:pc-h-80 lg:pc-h-96"
              src={image}
            />
          )}
        </div>
        {cta_description && (
          <p className="pc-mb-4 pc-max-w-xl pc-text-base pc-text-gray-700 sm:pc-mx-auto">
            {cta_description}
          </p>
        )}
        {cta_button_label && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={disableLink ? undefined : cta_link}
            className="pc-inline-flex pc-items-center pc-font-semibold pc-text-purple-400 pc-transition-colors pc-duration-200 hover:pc-text-purple-800"
          >
            {cta_button_label}
            <svg
              className="pc-ml-2 pc-inline-block pc-w-3"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
