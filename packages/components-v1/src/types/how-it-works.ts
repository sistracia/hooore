export type HowItWorksTaskProps = {
  name?: string;
  description?: string;
};

export type HowItWorksStepProps = {
  headine?: string;
  task?: HowItWorksTaskProps[];
};

export type HowItWorksSlug = "how-it-works";

export type HowItWorksProps = {
  step?: HowItWorksStepProps[];
};
