import { Icon } from '@iconify/react'
import type { Team2Props } from '../../types/template-types/team-2'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Team2RendererProps = Team2Props &
  AdditionalPageRendererComponentProps

export function Team2(props: Team2RendererProps) {
  const { headline, description, teams, disableLink } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          {headline && (
            <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
              {headline}
            </h2>
          )}
          {description && (
            <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
              {description}
            </p>
          )}
        </div>

        <div className="pc-grid pc-grid-cols-2 pc-gap-x-4 pc-gap-y-8 md:pc-grid-cols-3 lg:pc-gap-x-8 lg:pc-gap-y-12">
          {teams?.map((team, index) => (
            <div key={index}>
              <div className="pc-mb-2 pc-h-48 pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg sm:pc-mb-4 sm:pc-h-60 md:pc-h-80">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={team?.image}
                  loading="lazy"
                  className="pc-h-full pc-w-full pc-object-cover pc-object-center"
                />
              </div>

              <div>
                <div className="pc-font-bold pc-text-indigo-500 md:pc-text-lg">
                  {team?.name}
                </div>
                <p className="pc-mb-3 pc-text-sm pc-text-gray-500 md:pc-mb-4 md:pc-text-base">
                  {team?.position}
                </p>

                <div className="pc-flex">
                  <div className="pc-flex pc-gap-4">
                    {team?.socials?.map((social, socialIndex) => {
                      return (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                          key={socialIndex}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
