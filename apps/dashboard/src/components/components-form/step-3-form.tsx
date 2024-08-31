import type { Step3Props } from "@repo/components/types/step-3";
import type { Step3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Step3Form(
  props: Step3Component & {
    projectId: string;
    onChange: (values: Step3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Step3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "step-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
