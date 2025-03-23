import type { Blog3Props } from '../../types/template-types/blog-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Blog3RendererProps = Blog3Props &
  AdditionalPageRendererComponentProps

export function Blog3(props: Blog3RendererProps) {
  const { headline, description, blog, disableLink } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
            {headline}
          </h2>

          <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
            {description}
          </p>
        </div>

        <div className="pc-grid pc-gap-8 sm:pc-grid-cols-2 sm:pc-gap-12 lg:pc-grid-cols-2 xl:pc-grid-cols-2 xl:pc-gap-16">
          {blog?.map((item, index) => {
            return (
              <div
                key={index}
                className="pc-flex pc-flex-col pc-items-center pc-gap-4 md:pc-flex-row lg:pc-gap-6"
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href={disableLink ? undefined : item?.link}
                  className="pc-group pc-relative pc-block pc-h-56 pc-w-full pc-shrink-0 pc-self-start pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-24 md:pc-w-24 lg:pc-h-40 lg:pc-w-40"
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    src={item?.image}
                    loading="lazy"
                    className="group-hover:scale-110 pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200"
                  />
                </a>

                <div className="pc-flex pc-flex-col pc-gap-2">
                  <span className="pc-text-sm pc-text-gray-400">
                    {item?.date}
                  </span>

                  <h2 className="pc-text-xl pc-font-bold pc-text-gray-800">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      href={disableLink ? undefined : item?.link}
                      className="pc-transition pc-duration-100 hover:pc-text-indigo-500 active:pc-text-indigo-600"
                    >
                      {item?.title}
                    </a>
                  </h2>

                  <p className="pc-text-gray-500">{item?.description}</p>

                  <div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      href={disableLink ? undefined : item?.link}
                      className="pc-font-semibold pc-text-indigo-500 pc-transition pc-duration-100 hover:pc-text-indigo-600 active:pc-text-indigo-700"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
