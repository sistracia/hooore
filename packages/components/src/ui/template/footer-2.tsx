import { Icon } from '@iconify/react'
import type { Footer2Props } from '../../types/template-types/footer-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Footer2RendererProps = Footer2Props &
  AdditionalPageRendererComponentProps

export function Footer2(props: Footer2RendererProps) {
  const { image, disableLink, description, socials, categories, copyright } =
    props

  return (
    <div className="pc-bg-white pc-pt-4 sm:pc-pt-10 lg:pc-pt-12">
      <footer className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-16 pc-grid pc-grid-cols-2 pc-gap-12 pc-border-t pc-pt-10 md:pc-grid-cols-4 lg:pc-grid-cols-6 lg:pc-gap-8 lg:pc-pt-12">
          <div className="pc-col-span-full lg:pc-col-span-2">
            <div className="pc-mb-4 lg:-pc-mt-2">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={disableLink ? undefined : '#'}
                className="pc-inline-flex pc-items-center pc-gap-2 pc-font-bold"
              >
                {image && (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <img
                    src={image}
                    loading="lazy"
                    className="pc-max-h-28 pc-w-full pc-max-w-28 sm:pc-max-h-32 sm:pc-max-w-32"
                  />
                )}
              </a>
            </div>

            <p className="pc-mb-6 pc-text-gray-500 sm:pc-pr-8">{description}</p>

            <div className="pc-flex pc-gap-4">
              {socials?.map((social, index) => {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    key={index}
                    href={disableLink ? undefined : social?.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="pc-text-gray-400 pc-transition pc-duration-100 hover:pc-text-gray-500 active:pc-text-gray-600"
                  >
                    {social?.slug && <Icon icon={social.slug} />}
                  </a>
                )
              })}
            </div>
          </div>

          {categories?.map(
            (category, index) =>
              category && (
                <div key={index}>
                  <div className="pc-mb-4 pc-font-bold pc-uppercase pc-tracking-widest pc-text-gray-800">
                    {category.headline}
                  </div>

                  <nav className="pc-flex pc-flex-col pc-gap-4">
                    {category.links?.map((link, linkIndex) => {
                      return (
                        <div key={linkIndex}>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a
                            href={disableLink ? undefined : link?.link}
                            className="pc-text-gray-500 pc-transition pc-duration-100 hover:pc-text-indigo-500 active:pc-text-indigo-600"
                          >
                            {link?.label}
                          </a>
                        </div>
                      )
                    })}
                  </nav>
                </div>
              ),
          )}
        </div>

        <div className="pc-border-t pc-py-8 pc-text-center pc-text-sm pc-text-gray-400">
          {copyright}
        </div>
      </footer>
    </div>
  )
}
