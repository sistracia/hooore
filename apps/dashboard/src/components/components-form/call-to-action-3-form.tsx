import type { CallToAction3Props } from "@repo/components/types/call-to-action-3";
import type { CallToAction3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function CallToAction3Form(
  props: CallToAction3Component & {
    projectId: string;
    onChange: (values: CallToAction3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<CallToAction3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "call-to-action-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
