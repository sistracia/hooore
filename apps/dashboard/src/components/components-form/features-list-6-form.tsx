import type { FeaturesList6Props } from "@repo/components/types/features-list-6";
import type { FeaturesList6Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function FeaturesList6Form(
  props: FeaturesList6Component & {
    projectId: string;
    onChange: (values: FeaturesList6Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<FeaturesList6Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "features-list-6", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
