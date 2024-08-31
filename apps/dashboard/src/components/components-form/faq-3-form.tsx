import type { Faq3Props } from "@repo/components/types/faq-3";
import type { Faq3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Faq3Form(
  props: Faq3Component & {
    projectId: string;
    onChange: (values: Faq3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Faq3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "faq-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
