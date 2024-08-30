import type { CallToAction6Props } from "@repo/components/types/call-to-action-6";
import type { CallToAction6Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function CallToAction6Form(
  props: CallToAction6Component & {
    projectId: string;
    onChange: (values: CallToAction6Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<CallToAction6Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "call-to-action-6", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
