import { Icon } from '@iconify/react'
import type { Footer4Props } from '../../types/template-types/footer-4'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Footer4RendererProps = Footer4Props &
  AdditionalPageRendererComponentProps

export function Footer4(props: Footer4RendererProps) {
  const { image, description, links, socials, disableLink } = props

  return (
    <footer className="pc-bg-gray-100">
      <div className="pc-mx-auto pc-max-w-5xl pc-px-4 pc-py-16 sm:pc-px-6 lg:pc-px-8">
        <div className="pc-flex pc-justify-center">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            src={image}
            className="pc-max-h-36 pc-max-h-full pc-w-full pc-max-w-36"
          />
        </div>

        <p className="pc-mx-auto pc-mt-6 pc-max-w-md pc-text-center pc-leading-relaxed pc-text-gray-500">
          {description}
        </p>

        <ul className="pc-mt-12 pc-flex pc-flex-wrap pc-justify-center pc-gap-6 md:pc-gap-8 lg:pc-gap-12">
          {links?.map((item, idx) => {
            return (
              <li key={idx}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href={disableLink ? undefined : item?.link}
                  className="pc-text-gray-700 pc-transition hover:pc-text-gray-700/75"
                >
                  {item?.label}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="pc-mt-12 pc-flex pc-justify-center pc-gap-6 md:pc-gap-8">
          {socials?.map((social, idx) => {
            return (
              <li key={idx}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href={disableLink ? undefined : social?.link}
                  rel="noreferrer"
                  target="_blank"
                  className="pc-text-gray-700 pc-transition hover:pc-text-gray-700/75"
                >
                  <span className="pc-sr-only">{social?.slug}</span>
                  {social?.slug && <Icon icon={social.slug} />}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
