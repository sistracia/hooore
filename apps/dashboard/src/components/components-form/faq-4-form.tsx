import type { Faq4Props } from "@repo/components/types/faq-4";
import type { Faq4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Faq4Form(
  props: Faq4Component & {
    projectId: string;
    onChange: (values: Faq4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Faq4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "faq-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
