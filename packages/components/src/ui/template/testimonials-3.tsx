import type { Testimonials3Props } from '../../types/template-types/testimonials-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Testimonials3RendererProps = Testimonials3Props &
  AdditionalPageRendererComponentProps

export function Testimonials3(props: Testimonials3RendererProps) {
  const { headline, testimonials } = props

  return (
    <section className="pc-bg-white">
      <div className="pc-mx-auto pc-max-w-screen-xl pc-px-4 pc-py-12 sm:pc-px-6 lg:pc-px-8 lg:pc-py-16">
        <h2 className="pc-text-center pc-text-4xl pc-font-bold pc-tracking-tight pc-text-gray-900 sm:pc-text-5xl">
          {headline}
        </h2>

        <div className="pc-[column-fill:_balance] pc-mt-8 sm:pc-columns-2 sm:pc-gap-6 lg:pc-columns-3 lg:pc-gap-8">
          {testimonials?.map((testimonial, index) => {
            return (
              <div key={index} className="pc-mb-8 sm:pc-break-inside-avoid">
                <blockquote className="pc-rounded-lg pc-bg-gray-50 pc-p-6 pc-shadow-sm sm:pc-p-8">
                  <div className="pc-flex pc-items-center pc-gap-4">
                    {testimonial?.image && (
                      // eslint-disable-next-line jsx-a11y/alt-text
                      <img
                        src={testimonial.image}
                        className="pc-size-14 pc-rounded-full pc-object-cover"
                      />
                    )}

                    <div>
                      <div className="pc-flex pc-justify-center pc-gap-0.5 pc-text-green-500">
                        {[...Array(5)].map((_, i) => {
                          return (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="pc-h-5 pc-w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )
                        })}
                      </div>

                      {testimonial?.name && (
                        <p className="pc-mt-0.5 pc-text-lg pc-font-medium pc-text-gray-900">
                          {testimonial.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {testimonial?.description && (
                    <p className="pc-mt-4 pc-text-gray-700">
                      {testimonial.description}
                    </p>
                  )}
                </blockquote>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
