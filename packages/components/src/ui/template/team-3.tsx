import type { Team3Props } from '../../types/template-types/team-3'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Team3RendererProps = Team3Props &
  AdditionalPageRendererComponentProps

export function Team3(props: Team3RendererProps) {
  const { headline, description, teams } = props

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

        <div className="pc-grid pc-grid-cols-2 pc-gap-x-4 pc-gap-y-6 sm:pc-gap-y-8 lg:pc-grid-cols-3 lg:pc-gap-x-8 lg:pc-gap-y-12">
          {teams?.map((team, index) => {
            return (
              <div
                key={index}
                className="pc-flex pc-flex-col pc-items-center pc-gap-2 sm:pc-flex-row md:pc-gap-4"
              >
                <div className="pc-h-24 pc-w-24 pc-overflow-hidden pc-rounded-full pc-bg-gray-100 pc-shadow-lg md:pc-h-32 md:pc-w-32">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    src={team?.image}
                    loading="lazy"
                    className="pc-h-full pc-w-full pc-object-cover pc-object-center"
                  />
                </div>

                <div>
                  <div className="pc-text-center pc-font-bold pc-text-indigo-500 sm:pc-text-left md:pc-text-lg">
                    {team?.name}
                  </div>
                  <p className="pc-text-center pc-text-sm pc-text-gray-500 sm:pc-text-left md:pc-text-base">
                    {team?.position}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
