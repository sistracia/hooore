import { Icon } from '@iconify/react'
import type { Team4Props } from '../../types/template-types/team-4'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Team4RendererProps = Team4Props &
  AdditionalPageRendererComponentProps

export function Team4(props: Team4RendererProps) {
  const { headline, description, teams, disableLink } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
            {headline}
          </h2>

          <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
            {description}
          </p>
        </div>

        <div className="pc-grid pc-grid-cols-2 pc-gap-4 md:pc-grid-cols-3 lg:pc-grid-cols-4 lg:pc-gap-8">
          {teams?.map((member, index) => (
            <div
              key={index}
              className="pc-flex pc-flex-col pc-items-center pc-rounded-lg pc-bg-gray-100 pc-p-4 lg:pc-p-8"
            >
              <div className="pc-mb-2 pc-h-24 pc-w-24 pc-overflow-hidden pc-rounded-full pc-bg-gray-200 pc-shadow-lg md:pc-mb-4 md:pc-h-32 md:pc-w-32">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={member?.image}
                  loading="lazy"
                  className="pc-h-full pc-w-full pc-object-cover pc-object-center"
                />
              </div>

              <div>
                <div className="pc-text-center pc-font-bold pc-text-indigo-500 md:pc-text-lg">
                  {member?.name}
                </div>
                <p className="pc-mb-3 pc-text-center pc-text-sm pc-text-gray-500 md:pc-mb-4 md:pc-text-base">
                  {member?.position}
                </p>

                <div className="pc-flex pc-justify-center">
                  <div className="pc-flex pc-gap-4">
                    {member?.socials?.map((social, socialIndex) => {
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
