import type { CallToAction6Props } from '../../types/template-types/call-to-action-6'
import type { AdditionalPageRendererComponentProps } from '../types'

export type CallToAction6RendererProps = CallToAction6Props &
  AdditionalPageRendererComponentProps

export function CallToAction6(props: CallToAction6RendererProps) {
  const {
    left_button_label,
    left_button_link,
    right_button_label,
    right_button_link,
    sub_headline,
    headline,
    disableLink = false,
  } = props

  return (
    <section className="pc-w-full pc-bg-gradient-to-b pc-from-gray-100 pc-to-white">
      <div className="pc-mx-auto pc-w-full pc-px-4 pc-py-20 pc-text-left md:pc-w-3/4 md:pc-text-center lg:pc-w-2/4">
        {sub_headline && (
          <p className="pc-mb-2 pc-text-base pc-font-semibold pc-text-purple-700">
            Start your free trial now
          </p>
        )}
        {headline && (
          <h2 className="pc-mb-6 pc-text-3xl pc-font-extrabold pc-tracking-tight md:pc-mb-6 md:pc-text-4xl md:pc-leading-tight">
            {headline}
          </h2>
        )}
        <div className="pc-mb-0 pc-space-x-0 md:pc-space-x-2">
          {left_button_label && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              className="pc-mb-2 pc-inline-flex pc-w-full pc-items-center pc-justify-center pc-rounded pc-bg-purple-400 pc-p-4 pc-text-lg pc-text-white sm:pc-mb-0 sm:pc-w-auto"
              href={disableLink ? undefined : left_button_link}
            >
              {left_button_label}
              <svg
                className="pc-ml-1 pc-h-4 pc-w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
          {right_button_label && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              className="pc-mb-2 pc-inline-flex pc-w-full pc-items-center pc-justify-center pc-rounded pc-bg-gray-100 pc-p-4 pc-text-lg pc-text-black sm:pc-mb-0 sm:pc-w-auto"
              href={disableLink ? undefined : right_button_link}
            >
              {right_button_label}
              <svg
                className="pc-ml-1 pc-h-4 pc-w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
