export type Step1Slug = 'step-1'

export type StepItem1Props = {
  value?: string
  label?: string
}

export type Step1Props = {
  image?: string
  steps?: (StepItem1Props | undefined)[]
}
