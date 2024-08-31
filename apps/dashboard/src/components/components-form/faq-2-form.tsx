import type { Faq2Props } from "@repo/components/types/faq-2";
import type { Faq2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Faq2Form(
  props: Faq2Component & {
    projectId: string;
    onChange: (values: Faq2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Faq2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "faq-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
