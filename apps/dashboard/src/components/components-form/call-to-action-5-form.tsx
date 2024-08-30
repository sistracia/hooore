import type { CallToAction5Props } from "@repo/components/types/call-to-action-5";
import type { CallToAction5Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function CallToAction5Form(
  props: CallToAction5Component & {
    projectId: string;
    onChange: (values: CallToAction5Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<CallToAction5Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "call-to-action-5", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
