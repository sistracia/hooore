import type { Blog2Props } from '../../types/template-types/blog-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Blog2RendererProps = Blog2Props &
  AdditionalPageRendererComponentProps

export function Blog2(props: Blog2RendererProps) {
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
          {blog?.map((item, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={index}
                href={disableLink ? undefined : item?.link}
                className="pc-group pc-relative pc-flex pc-h-48 pc-flex-col pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-64 xl:pc-h-96"
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={item?.image}
                  loading="lazy"
                  className="pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"
                />

                <div className="pc-pointer-events-none pc-absolute pc-inset-0 pc-bg-gradient-to-t pc-from-gray-800 pc-to-transparent md:pc-via-transparent"></div>

                <div className="pc-relative pc-mt-auto pc-p-4">
                  <span className="pc-block pc-text-sm pc-text-gray-200">
                    {item?.date}
                  </span>
                  <h2 className="pc-mb-2 pc-text-xl pc-font-semibold pc-text-white pc-transition pc-duration-100">
                    {item?.title}
                  </h2>

                  <span className="pc-font-semibold pc-text-indigo-300">
                    Read more
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
