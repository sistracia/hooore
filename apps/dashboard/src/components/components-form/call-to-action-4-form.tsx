import type { CallToAction4Props } from "@repo/components/types/call-to-action-4";
import type { CallToAction4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function CallToAction4Form(
  props: CallToAction4Component & {
    projectId: string;
    onChange: (values: CallToAction4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<CallToAction4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "call-to-action-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
