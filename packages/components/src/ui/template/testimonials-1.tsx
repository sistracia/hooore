import type { Testimonials1Props } from '../../types/template-types/testimonials-1'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Testimonials1RendererProps = Testimonials1Props &
  AdditionalPageRendererComponentProps

export function Testimonials1(props: Testimonials1RendererProps) {
  const { headline, testimonials } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8">
        {headline && (
          <h2 className="pc-mb-8 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-12 lg:pc-text-3xl">
            {headline}
          </h2>
        )}

        <div className="pc-grid pc-gap-y-10 sm:pc-grid-cols-2 sm:pc-gap-y-12 lg:pc-grid-cols-3 lg:pc-divide-x">
          {testimonials?.map((testimonial, index) => {
            return (
              <div
                key={index}
                className="pc-flex pc-flex-col pc-items-center pc-gap-4 sm:pc-px-4 md:pc-gap-6 lg:pc-px-8"
              >
                <div className="pc-text-center pc-text-gray-600">
                  {'"'}
                  {testimonial?.description}
                  {'"'}
                </div>

                <div className="pc-flex pc-flex-col pc-items-center pc-gap-2 sm:pc-flex-row md:pc-gap-3">
                  <div className="pc-h-12 pc-w-12 pc-overflow-hidden pc-rounded-full pc-bg-gray-100 pc-shadow-lg md:pc-h-14 md:pc-w-14">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      src={testimonial?.image}
                      loading="lazy"
                      className="pc-h-full pc-w-full pc-object-cover pc-object-center"
                    />
                  </div>

                  <div>
                    <div className="pc-text-center pc-text-sm pc-font-bold pc-text-indigo-500 sm:pc-text-left md:pc-text-base">
                      {testimonial?.name}
                    </div>
                    <p className="pc-text-center pc-text-sm pc-text-gray-500 sm:pc-text-left md:pc-text-sm">
                      {testimonial?.position}
                    </p>
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
