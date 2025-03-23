export type Pricing3Slug = 'pricing-3'

export type PricingCardList3Props = {
  text?: string
}

export type Pricing3Props = {
  headline?: string

  main_card_title?: string
  main_card_description?: string
  main_card_price?: string
  main_card_price_symbol?: string
  main_card_price_text?: string
  main_card_cta_button_label?: string
  main_card_cta_link?: string
  main_card_list?: PricingCardList3Props[]

  second_card_title?: string
  second_card_description?: string
  second_card_price?: string
  second_card_price_symbol?: string
  second_card_price_text?: string
  second_card_cta_button_label?: string
  second_card_cta_link?: string
  second_card_list?: PricingCardList3Props[]

  third_card_title?: string
  third_card_description?: string
  third_card_price?: string
  third_card_price_symbol?: string
  third_card_price_text?: string
  third_card_cta_button_label?: string
  third_card_cta_link?: string
  third_card_list?: PricingCardList3Props[]
}
