import type {
  Pricing2Props,
  PricingCardList2Props,
} from '../../types/template-types/pricing-2'
import type { AdditionalPageRendererComponentProps } from '../types'

function RenderFeatureList(props: { list?: PricingCardList2Props[] }) {
  const { list } = props
  return (
    <ul className="pc-mb-6 pc-space-y-2 pc-text-gray-300">
      {list?.map((item, index) => (
        <li key={index} className="pc-flex pc-items-center pc-gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pc-h-5 pc-w-5 pc-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

export type Pricing2RendererProps = Pricing2Props &
  AdditionalPageRendererComponentProps

export function Pricing2(props: Pricing2RendererProps) {
  const {
    headline,
    description,
    main_card_title,
    main_card_description,
    main_card_price,
    main_card_price_before,
    main_card_cta_button_label,
    main_card_cta_link,
    main_card_list,
    second_card_title,
    second_card_description,
    second_card_price,
    second_card_price_before,
    second_card_cta_button_label,
    second_card_cta_link,
    second_card_list,
    disableLink,
  } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-lg pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
            {headline}
          </h2>

          <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
            {description}
          </p>
        </div>

        <div className="pc-flex pc-flex-wrap pc-items-center pc-justify-center pc-gap-4 sm:pc-gap-0">
          <div className="pc-w-full pc-rounded-lg pc-bg-gray-800 pc-p-6 sm:pc-w-1/2 sm:pc-rounded-r-none sm:pc-p-8 lg:pc-w-1/3">
            <div className="pc-mb-4">
              <h3 className="pc-text-2xl pc-font-semibold pc-text-gray-100 sm:pc-text-3xl">
                {second_card_title}
              </h3>
              <p className="pc-text-gray-300">{second_card_description}</p>
            </div>

            <div className="pc-mb-4 pc-space-x-2">
              <span className="pc-text-4xl pc-font-bold pc-text-gray-100">
                {second_card_price}
              </span>
              {second_card_price_before && (
                <span className="pc-text-2xl pc-text-gray-300 pc-line-through">
                  {second_card_price_before}
                </span>
              )}
            </div>

            <RenderFeatureList list={second_card_list} />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href={disableLink ? undefined : second_card_cta_link}
              className="pc-block pc-rounded-lg pc-bg-gray-500 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-100 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-600 focus-visible:pc-ring active:pc-text-gray-300 md:pc-text-base"
            >
              {second_card_cta_button_label}
            </a>
          </div>

          <div className="pc-w-full pc-rounded-lg pc-bg-gradient-to-tr pc-from-indigo-500 pc-to-violet-400 pc-p-6 pc-shadow-xl sm:pc-w-1/2 sm:pc-p-8">
            <div className="pc-mb-4 pc-flex pc-flex-col pc-items-start pc-justify-between pc-gap-4 lg:pc-flex-row">
              <div>
                <h3 className="pc-text-2xl pc-font-semibold pc-text-white sm:pc-text-3xl">
                  {main_card_title}
                </h3>
                <p className="pc-text-indigo-100">{main_card_description}</p>
              </div>
              <span className="bg-opacity-50 pc-order-first pc-inline-block pc-rounded-full pc-bg-indigo-200 pc-px-3 pc-py-1 pc-text-xs pc-font-semibold pc-uppercase pc-tracking-wider pc-text-white lg:pc-order-none">
                Best value
              </span>
            </div>

            <div className="pc-mb-4 pc-space-x-2">
              <span className="pc-text-4xl pc-font-bold pc-text-white">
                {main_card_price}
              </span>
              {main_card_price_before && (
                <span className="pc-text-2xl pc-text-indigo-100 pc-line-through">
                  {main_card_price_before}
                </span>
              )}
            </div>

            <RenderFeatureList list={main_card_list} />

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href={disableLink ? undefined : main_card_cta_link}
              className="bg-opacity-50 pc-block pc-rounded-lg pc-bg-indigo-200 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-white pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-indigo-300 focus-visible:pc-ring active:pc-bg-indigo-400 md:pc-text-base"
            >
              {main_card_cta_button_label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
