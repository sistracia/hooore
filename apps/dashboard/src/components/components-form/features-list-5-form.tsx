import type { FeaturesList5Props } from "@repo/components/types/features-list-5";
import type { FeaturesList5Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function FeaturesList5Form(
  props: FeaturesList5Component & {
    projectId: string;
    onChange: (values: FeaturesList5Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<FeaturesList5Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "features-list-5", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
