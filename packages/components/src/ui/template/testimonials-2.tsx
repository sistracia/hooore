'use client'

import { useRef, useState } from 'react'
import type { Testimonials2Props } from '../../types/template-types/testimonials-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Testimonials2RendererProps = Testimonials2Props &
  AdditionalPageRendererComponentProps

export function Testimonials2(props: Testimonials2RendererProps) {
  const { headline, description, testimonials = [] } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToTestimonial = (index: number) => {
    setCurrentIndex(index)
    testimonialRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length
    scrollToTestimonial(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length
    scrollToTestimonial(prevIndex)
  }

  return (
    <section className="pc-bg-gray-50">
      <div className="pc-mx-auto pc-max-w-[1340px] pc-px-4 pc-py-12 sm:pc-px-6 lg:pc-me-0 lg:pc-py-16 lg:pc-pe-0 lg:pc-ps-8 xl:pc-py-24">
        <div className="pc-grid pc-grid-cols-1 pc-gap-8 lg:pc-grid-cols-3 lg:pc-items-center lg:pc-gap-16">
          <div className="pc-max-w-xl pc-text-center ltr:sm:pc-text-left rtl:sm:pc-text-right">
            <h2 className="pc-text-3xl pc-font-bold pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl">
              {headline}
            </h2>

            <p className="pc-mt-4 pc-text-gray-700">{description}</p>

            <div className="pc-hidden lg:pc-mt-8 lg:pc-flex lg:pc-gap-4">
              <button
                aria-label="Previous slide"
                className="pc-rounded-full pc-border pc-border-rose-600 pc-p-3 pc-text-rose-600 pc-transition hover:pc-bg-rose-600 hover:pc-text-white"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pc-size-5 rtl:pc-rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                className="pc-rounded-full pc-border pc-border-rose-600 pc-p-3 pc-text-rose-600 pc-transition hover:pc-bg-rose-600 hover:pc-text-white"
                onClick={handleNext}
              >
                <svg
                  className="pc-size-5 rtl:pc-rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-pc-mx-6 lg:pc-col-span-2 lg:pc-mx-0">
            <div className="pc-flex pc-snap-x pc-snap-mandatory pc-gap-4 pc-overflow-x-auto">
              {testimonials?.map((testimonial, index) => {
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      testimonialRefs.current[index] = el
                    }}
                    className="pc-w-full pc-flex-shrink-0 pc-snap-center"
                  >
                    <blockquote className="pc-flex pc-h-full pc-flex-col pc-justify-between pc-bg-white pc-p-6 pc-shadow-sm sm:pc-p-8 lg:pc-p-12">
                      <div>
                        <div className="pc-flex pc-gap-0.5 pc-text-green-500">
                          {[...Array(5)].map((_, i) => {
                            return (
                              <svg
                                key={i}
                                className="pc-h-5 pc-w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            )
                          })}
                        </div>

                        <div className="pc-mt-4">
                          <p className="pc-text-2xl pc-font-bold pc-text-rose-600 sm:pc-text-3xl">
                            {testimonial?.headline}
                          </p>

                          <p className="pc-mt-4 pc-leading-relaxed pc-text-gray-700">
                            {testimonial?.description}
                          </p>
                        </div>
                      </div>

                      <footer className="pc-mt-4 pc-text-sm pc-font-medium pc-text-gray-700 sm:pc-mt-6">
                        &mdash; {testimonial?.name}
                      </footer>
                    </blockquote>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pc-mt-8 pc-flex pc-justify-center pc-gap-4 lg:pc-hidden">
          <button
            aria-label="Previous slide"
            className="pc-rounded-full pc-border pc-border-rose-600 pc-p-4 pc-text-rose-600 pc-transition hover:pc-bg-rose-600 hover:pc-text-white"
            onClick={handlePrev}
          >
            <svg
              className="pc-size-5 -pc-rotate-180 pc-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="pc-rounded-full pc-border pc-border-rose-600 pc-p-4 pc-text-rose-600 pc-transition hover:pc-bg-rose-600 hover:pc-text-white"
            onClick={handleNext}
          >
            <svg
              className="pc-h-5 pc-w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
