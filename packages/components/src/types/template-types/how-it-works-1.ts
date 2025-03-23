export type HowItWorks1Slug = 'how-it-works-1'

export type HowItWorksTaskProps = {
  name?: string
  description?: string
}

export type HowItWorksStepProps = {
  headine?: string
  task?: (HowItWorksTaskProps | undefined)[]
}

export type HowItWorks1Props = {
  step?: (HowItWorksStepProps | undefined)[]
}
