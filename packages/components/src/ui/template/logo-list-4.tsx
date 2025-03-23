import type { LogoList4Props } from '../../types/template-types/logo-list-4'
import type { AdditionalPageRendererComponentProps } from '../types'

export type LogoList4RendererProps = LogoList4Props &
  AdditionalPageRendererComponentProps

export function LogoList4(props: LogoList4RendererProps) {
  const {
    title,
    description,
    cta_button_label,
    cta_link,
    images,
    disableLink,
  } = props

  return (
    <section className="pc-mx-auto pc-max-w-7xl pc-px-4 pc-py-24">
      <h1 className="pc-mb-3 pc-text-center pc-text-3xl pc-font-bold pc-leading-tight pc-text-gray-900 md:pc-text-4xl">
        {title}
      </h1>
      <p className="pc-mb-16 pc-text-center pc-text-lg pc-text-gray-600">
        {description}
      </p>
      {images && (
        <div className="pc-mb-16 pc-grid pc-grid-cols-2 pc-gap-16 pc-text-center lg:pc-grid-cols-6">
          {images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className="pc-flex pc-items-center pc-justify-center"
            >
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src={image?.image}
                className="pc-block pc-h-16 pc-object-contain"
              />
            </div>
          ))}
        </div>
      )}
      {cta_button_label && (
        <div className="pc-text-center">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href={disableLink ? undefined : cta_link}
            className="pc-mx-auto pc-flex pc-w-fit pc-items-center pc-rounded pc-bg-gray-100 pc-p-4"
          >
            <span>{cta_button_label}</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="pc-ml-3 pc-h-4 pc-w-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      )}
    </section>
  )
}
