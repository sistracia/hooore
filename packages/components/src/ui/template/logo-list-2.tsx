import type { LogoList2Props } from '../../types/template-types/logo-list-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type LogoList2RendererProps = LogoList2Props &
  AdditionalPageRendererComponentProps

export function LogoList2(props: LogoList2RendererProps) {
  const { description, cta_button_label, cta_link, images, disableLink } = props

  return (
    <section>
      <div className="pc-mx-auto pc-px-5 pc-py-24 lg:pc-px-16">
        <div className="pc-mb-8 pc-flex pc-w-full pc-flex-col pc-text-center">
          <span className="pc-mb-4 pc-text-sm pc-font-medium pc-uppercase pc-tracking-wide pc-text-gray-500">
            {description}
            {cta_button_label && (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                href={disableLink ? undefined : cta_link}
                className="pc-font-semibold pc-text-blue-600 hover:pc-text-blue-500 lg:pc-mb-0"
              >
                {cta_button_label}
              </a>
            )}
          </span>
        </div>
        <div className="pc-mx-auto pc-text-center">
          {images && (
            <div className="pc-mx-auto pc-grid pc-grid-cols-5 pc-gap-4 lg:pc-grid-cols-5">
              {images.map((image, imageIndex) => {
                return (
                  <div key={imageIndex}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      className="pc-mx-auto pc-h-4 lg:pc-h-12"
                      src={image?.image}
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
