import type { CallToAction2Props } from "@repo/components/types/call-to-action-2";
import type { CallToAction2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function CallToAction2Form(
  props: CallToAction2Component & {
    projectId: string;
    onChange: (values: CallToAction2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<CallToAction2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "call-to-action-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
