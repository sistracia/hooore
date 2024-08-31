import type { Step1Props } from "@repo/components/types/step-1";
import type { Step1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Step1Form(
  props: Step1Component & {
    projectId: string;
    onChange: (values: Step1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Step1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "step-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
