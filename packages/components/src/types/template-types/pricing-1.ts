export type Pricing1Slug = 'pricing-1'

export type PricingCardList1Props = {
  text?: string
}

export type Pricing1Props = {
  headline?: string
  description?: string
  cta_button_label?: string
  cta_link?: string

  main_card_title?: string
  main_card_description?: string
  main_card_price?: string
  main_card_price_symbol?: string
  main_card_price_text?: string
  main_card_cta_button_label?: string
  main_card_cta_link?: string
  main_card_list?: PricingCardList1Props[]

  second_card_title?: string
  second_card_description?: string
  second_card_price?: string
  second_card_price_symbol?: string
  second_card_price_text?: string
  second_card_cta_button_label?: string
  second_card_cta_link?: string
  second_card_list?: PricingCardList1Props[]

  third_card_title?: string
  third_card_description?: string
  third_card_price?: string
  third_card_price_symbol?: string
  third_card_price_text?: string
  third_card_cta_button_label?: string
  third_card_cta_link?: string
  third_card_list?: PricingCardList1Props[]
}
