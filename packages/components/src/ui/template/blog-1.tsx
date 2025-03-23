import type { Blog1Props } from '../../types/template-types/blog-1'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Blog1RendererProps = Blog1Props &
  AdditionalPageRendererComponentProps

export function Blog1(props: Blog1RendererProps) {
  const { headline, description, blog, disableLink } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
            {headline}
          </h2>

          <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
            {description}
          </p>
        </div>

        <div className="pc-grid pc-gap-4 sm:pc-grid-cols-2 md:pc-gap-6 lg:pc-grid-cols-3 xl:pc-grid-cols-4 xl:pc-gap-8">
          {blog?.map((item, index) => (
            <div
              key={index}
              className="pc-flex pc-flex-col pc-overflow-hidden pc-rounded-lg pc-border pc-bg-white"
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={disableLink ? undefined : item?.link}
                className="pc-group pc-relative pc-block pc-h-48 pc-overflow-hidden pc-bg-gray-100 md:pc-h-64"
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={item?.image}
                  loading="lazy"
                  className="pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"
                />
              </a>

              <div className="pc-flex pc-flex-1 pc-flex-col pc-p-4 sm:pc-p-6">
                <h2 className="pc-mb-2 pc-text-lg pc-font-semibold pc-text-gray-800">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href={disableLink ? undefined : item?.link}
                    className="pc-transition pc-duration-100 hover:pc-text-indigo-500 active:pc-text-indigo-600"
                  >
                    {item?.title}
                  </a>
                </h2>

                <p className="pc-mb-8 pc-text-gray-500">{item?.description}</p>

                <div className="pc-mt-auto pc-flex pc-items-end pc-justify-between">
                  <div className="pc-flex pc-items-center pc-gap-2">
                    <div className="pc-h-10 pc-w-10 pc-shrink-0 pc-overflow-hidden pc-rounded-full pc-bg-gray-100">
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <img
                        src={item?.author_image}
                        loading="lazy"
                        className="pc-h-full pc-w-full pc-object-cover pc-object-center"
                      />
                    </div>

                    <div>
                      <span className="pc-block pc-text-indigo-500">
                        {item?.author_name}
                      </span>
                      <span className="pc-block pc-text-sm pc-text-gray-400">
                        {item?.date}
                      </span>
                    </div>
                  </div>

                  <span className="pc-rounded pc-border pc-px-2 pc-py-1 pc-text-sm pc-text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
