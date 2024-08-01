export type HowItWorksTaskProps = {
  name?: string;
  description?: string;
};

export type HowItWorksStepProps = {
  headine?: string;
  task?: HowItWorksTaskProps[];
};

export type HowItWorksProps = {
  step?: HowItWorksStepProps[];
};
