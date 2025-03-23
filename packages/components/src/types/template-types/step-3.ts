export type Step3Slug = 'step-3'

export type StepItem3Props = {
  value?: string
  label?: string
}

export type Step3Props = {
  tag?: string
  headline?: string
  description?: string
  steps?: (StepItem3Props | undefined)[]
}
