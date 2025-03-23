export type Pricing2Slug = 'pricing-2'

export type PricingCardList2Props = {
  text?: string
}

export type Pricing2Props = {
  headline?: string
  description?: string

  main_card_title?: string
  main_card_description?: string
  main_card_price?: string
  main_card_price_before?: string
  main_card_cta_button_label?: string
  main_card_cta_link?: string
  main_card_list?: PricingCardList2Props[]

  second_card_title?: string
  second_card_description?: string
  second_card_price?: string
  second_card_price_before?: string
  second_card_cta_button_label?: string
  second_card_cta_link?: string
  second_card_list?: PricingCardList2Props[]
}
