import type { Step2Props } from "@repo/components/types/step-2";
import type { Step2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Step2Form(
  props: Step2Component & {
    projectId: string;
    onChange: (values: Step2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Step2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "step-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
