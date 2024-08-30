import type { FeaturesList4Props } from "@repo/components/types/features-list-4";
import type { FeaturesList4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function FeaturesList4Form(
  props: FeaturesList4Component & {
    projectId: string;
    onChange: (values: FeaturesList4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<FeaturesList4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "features-list-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
