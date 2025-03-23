import type { Content5Props } from '../../types/template-types/content-5'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Content5RendererProps = Content5Props &
  AdditionalPageRendererComponentProps

export function Content5(props: Content5RendererProps) {
  const { sub_headline, headline, description, image, video, disableLink } =
    props

  return (
    <section className="pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20">
      <div className="pc-mb-10 pc-max-w-xl sm:pc-text-center md:pc-mx-auto md:pc-mb-12 lg:pc-max-w-2xl">
        {sub_headline && (
          <div>
            <p className="pc-mb-4 pc-inline-block pc-rounded-full pc-bg-teal-400 pc-px-3 pc-py-px pc-text-xs pc-font-semibold pc-uppercase pc-tracking-wider pc-text-teal-900">
              {sub_headline}
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
                    id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
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
      <div className="pc-mx-auto lg:pc-max-w-2xl">
        <div className="pc-relative pc-w-full pc-transition-shadow pc-duration-300 hover:pc-shadow-xl">
          {image && (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              className="pc-h-56 pc-w-full pc-rounded pc-object-cover pc-shadow-lg sm:pc-h-64 md:pc-h-80 lg:pc-h-96"
              src={image}
            />
          )}
          {video && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={disableLink ? undefined : video}
              aria-label="Play Video"
              className="pc-group pc-absolute pc-inset-0 pc-flex pc-h-full pc-w-full pc-items-center pc-justify-center pc-bg-gray-900 pc-bg-opacity-50 pc-transition-colors pc-duration-300 hover:pc-bg-opacity-25"
            >
              <div className="group-hover:scale-110 pc-flex pc-h-16 pc-w-16 pc-transform pc-items-center pc-justify-center pc-rounded-full pc-bg-gray-100 pc-shadow-2xl pc-transition pc-duration-300">
                <svg
                  className="pc-w-10 pc-text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"></path>
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
