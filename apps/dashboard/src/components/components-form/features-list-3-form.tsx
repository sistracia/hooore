import type { FeaturesList3Props } from "@repo/components/types/features-list-3";
import type { FeaturesList3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function FeaturesList3Form(
  props: FeaturesList3Component & {
    projectId: string;
    onChange: (values: FeaturesList3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<FeaturesList3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "features-list-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
