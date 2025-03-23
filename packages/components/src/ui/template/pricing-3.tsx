import type {
  Pricing3Props,
  PricingCardList3Props,
} from '../../types/template-types/pricing-3'
import type { AdditionalPageRendererComponentProps } from '../types'

function RenderFeatureList(props: { list?: PricingCardList3Props[] }) {
  const { list } = props
  return (
    <div className="pc-flex-1 pc-space-y-3 pc-rounded-lg pc-bg-gray-100 pc-px-4 pc-py-6">
      {list?.map((item, index) => {
        return (
          <div key={index} className="pc-flex pc-gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pc-h-6 pc-w-6 pc-shrink-0 pc-text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>

            <span className="pc-text-gray-600">{item.text}</span>
          </div>
        )
      })}
    </div>
  )
}

export type Pricing3RendererProps = Pricing3Props &
  AdditionalPageRendererComponentProps

export function Pricing3(props: Pricing3RendererProps) {
  const {
    headline,
    main_card_title,
    main_card_description,
    main_card_price,
    main_card_price_symbol,
    main_card_price_text,
    main_card_cta_button_label,
    main_card_cta_link,
    main_card_list,
    second_card_title,
    second_card_description,
    second_card_price,
    second_card_price_symbol,
    second_card_price_text,
    second_card_cta_button_label,
    second_card_cta_link,
    second_card_list,
    third_card_title,
    third_card_description,
    third_card_price,
    third_card_price_symbol,
    third_card_price_text,
    third_card_cta_button_label,
    third_card_cta_link,
    third_card_list,
    disableLink,
  } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8">
        <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-8 lg:pc-text-3xl xl:pc-mb-12">
          {headline}
        </h2>

        <div className="pc-mb-6 pc-grid pc-gap-x-6 pc-gap-y-12 sm:pc-grid-cols-2 md:pc-mb-8 lg:pc-grid-cols-3 lg:pc-gap-x-8">
          <div className="pc-flex pc-flex-col pc-space-y-4">
            <div className="pc-flex pc-flex-col pc-gap-4 pc-rounded-lg pc-border pc-p-4 pc-pt-6">
              <h3 className="pc-text-center pc-text-2xl pc-font-semibold pc-text-gray-800">
                {second_card_title}
              </h3>

              <div className="pc-flex pc-items-end pc-justify-center pc-gap-1">
                <span className="pc-text-4xl pc-font-bold pc-text-gray-800">
                  {second_card_price_symbol}
                  {second_card_price}
                </span>
                <span className="pc-text-gray-500">
                  {second_card_price_text}
                </span>
              </div>

              <div className="pc-mb-4 pc-flex pc-items-center pc-justify-center pc-gap-1 pc-text-sm pc-text-gray-500">
                {second_card_description}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pc-h-4 pc-w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={disableLink ? undefined : second_card_cta_link}
                className="pc-block pc-rounded-lg pc-bg-gray-200 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-500 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-300 focus-visible:pc-ring active:pc-text-gray-700 md:pc-text-base"
              >
                {second_card_cta_button_label}
              </a>
            </div>

            <div className="pc-flex-1 pc-space-y-3 pc-rounded-lg pc-bg-gray-100 pc-px-4 pc-py-6">
              <RenderFeatureList list={second_card_list} />
            </div>
          </div>

          <div className="pc-flex pc-flex-col pc-space-y-4">
            <div className="pc-relative pc-flex pc-flex-col pc-gap-4 pc-rounded-lg pc-border pc-border-indigo-500 pc-p-4 pc-pt-6">
              <h3 className="pc-text-center pc-text-2xl pc-font-semibold pc-text-gray-800">
                {main_card_title}
              </h3>

              <div className="pc-flex pc-items-end pc-justify-center pc-gap-1">
                <span className="pc-text-4xl pc-font-bold pc-text-gray-800">
                  {main_card_price_symbol}
                  {main_card_price}
                </span>
                <span className="pc-text-gray-500">{main_card_price_text}</span>
              </div>

              <div className="pc-mb-4 pc-flex pc-items-center pc-justify-center pc-gap-1 pc-text-sm pc-text-gray-500">
                {main_card_description}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pc-h-4 pc-w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={disableLink ? undefined : main_card_cta_link}
                className="pc-block pc-rounded-lg pc-bg-indigo-500 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-white pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-indigo-600 focus-visible:pc-ring active:pc-bg-indigo-700 md:pc-text-base"
              >
                {main_card_cta_button_label}
              </a>
            </div>

            <div className="pc-flex-1 pc-space-y-3 pc-rounded-lg pc-bg-gray-100 pc-px-4 pc-py-6">
              <RenderFeatureList list={main_card_list} />
            </div>
          </div>

          <div className="pc-flex pc-flex-col pc-space-y-4">
            <div className="pc-flex pc-flex-col pc-gap-4 pc-rounded-lg pc-border pc-p-4 pc-pt-6">
              <h3 className="pc-text-center pc-text-2xl pc-font-semibold pc-text-gray-800">
                {third_card_title}
              </h3>

              <div className="pc-flex pc-items-end pc-justify-center pc-gap-1">
                <span className="pc-text-4xl pc-font-bold pc-text-gray-800">
                  {third_card_price_symbol}
                  {third_card_price}
                </span>
                <span className="pc-text-gray-500">
                  {third_card_price_text}
                </span>
              </div>

              <div className="pc-mb-4 pc-flex pc-items-center pc-justify-center pc-gap-1 pc-text-sm pc-text-gray-500">
                {third_card_description}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pc-h-4 pc-w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={disableLink ? undefined : third_card_cta_link}
                className="pc-block pc-rounded-lg pc-bg-gray-800 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-white pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-700 focus-visible:pc-ring active:pc-bg-gray-600 md:pc-text-base"
              >
                {third_card_cta_button_label}
              </a>
            </div>

            <div className="pc-flex-1 pc-space-y-3 pc-rounded-lg pc-bg-gray-100 pc-px-4 pc-py-6">
              <RenderFeatureList list={third_card_list} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
