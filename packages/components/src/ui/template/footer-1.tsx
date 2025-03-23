import { cn } from '@hooore/utils'
import { Icon } from '@iconify/react'
import type { Footer1Props } from '../../types/template-types/footer-1'
import { Button } from '../common/button'
import type { AdditionalPageRendererComponentProps } from '../types'

const linksClassName =
  'pc-flex pc-w-full pc-flex-wrap pc-items-center pc-justify-center pc-gap-x-6 sm:pc-justify-start'

export type Footer1RendererProps = Footer1Props &
  AdditionalPageRendererComponentProps

export function Footer1(props: Footer1RendererProps) {
  const {
    link,
    additional_link,
    socials,
    projectLogo,
    copyright,
    disableLink = false,
  } = props

  return (
    <footer className="pc-bg-[rgb(var(--foreground))] pc-px-4 pc-py-10 pc-text-[rgb(var(--background))] sm:pc-px-20 sm:pc-py-20">
      <div className="pc-mb-10 pc-flex pc-flex-col pc-items-center pc-justify-between sm:pc-flex-row sm:pc-items-start">
        <div>
          {link && (
            <div className={cn('pc-mb-8 sm:pc-mb-2', linksClassName)}>
              {link.map((link, linkIndex) => {
                return (
                  <Button
                    key={linkIndex}
                    asChild
                    variant="link"
                    className="pc-justify-center"
                  >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={disableLink ? undefined : link?.link}
                    >
                      {link?.label}
                    </a>
                  </Button>
                )
              })}
            </div>
          )}
          {socials && (
            <div className={cn('pc-mb-8 pc-p-2 sm:pc-mb-0', linksClassName)}>
              {socials.map((social, socialIndex) => {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    key={socialIndex}
                    href={disableLink ? undefined : social?.link}
                  >
                    {social?.slug && (
                      <Icon icon={social.slug} className="pc-h-4 pc-w-4" />
                    )}
                  </a>
                )
              })}
            </div>
          )}
        </div>
        {projectLogo && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={projectLogo}
            loading="lazy"
            className="pc-max-h-28 pc-w-full pc-max-w-28 sm:pc-max-h-32 sm:pc-max-w-32"
          />
        )}
      </div>
      {additional_link && (
        <div className={linksClassName}>
          {additional_link.map((additionalLink, additionalLinkIndex) => {
            return (
              <Button
                key={additionalLinkIndex}
                asChild
                variant="link"
                className="pc-justify-center"
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={disableLink ? undefined : additionalLink?.link}
                >
                  {additionalLink?.label}
                </a>
              </Button>
            )
          })}
          {copyright && <p>{copyright}</p>}
        </div>
      )}
    </footer>
  )
}
