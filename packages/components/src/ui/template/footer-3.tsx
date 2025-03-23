import { Icon } from '@iconify/react'
import type { Footer3Props } from '../../types/template-types/footer-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Footer3RendererProps = Footer3Props &
  AdditionalPageRendererComponentProps

export function Footer3(props: Footer3RendererProps) {
  const { disableLink, links, socials, copyright } = props

  return (
    <div className="pc-bg-white pc-pt-4 sm:pc-pt-10 lg:pc-pt-12">
      <footer className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-flex pc-flex-col pc-items-center pc-justify-between pc-gap-4 pc-border-b pc-border-t pc-py-6 md:pc-flex-row">
          <nav className="pc-flex pc-flex-wrap pc-justify-center pc-gap-x-4 pc-gap-y-2 md:pc-justify-start md:pc-gap-6">
            {links?.map((item, index) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={index}
                  href={disableLink ? undefined : item?.link}
                  className="pc-text-gray-500 pc-transition pc-duration-100 hover:pc-text-indigo-500 active:pc-text-indigo-600"
                >
                  {item?.label}
                </a>
              )
            })}
          </nav>

          {socials && (
            <div className="pc-flex pc-gap-4">
              {socials.map((social, index) => {
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
          )}
        </div>

        <div className="pc-py-8 pc-text-center pc-text-sm pc-text-gray-400">
          {copyright}
        </div>
      </footer>
    </div>
  )
}
