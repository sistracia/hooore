export type Step2Slug = 'step-2'

export type StepItem2Props = {
  value?: string
  label?: string
}

export type Step2Props = {
  tag?: string
  headline?: string
  description?: string
  cta_button_label?: string
  cta_link?: string
  steps?: (StepItem2Props | undefined)[]
}
