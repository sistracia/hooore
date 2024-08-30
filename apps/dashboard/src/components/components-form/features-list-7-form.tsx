import type { FeaturesList7Props } from "@repo/components/types/features-list-7";
import type { FeaturesList7Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function FeaturesList7Form(
  props: FeaturesList7Component & {
    projectId: string;
    onChange: (values: FeaturesList7Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<FeaturesList7Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "features-list-7", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
