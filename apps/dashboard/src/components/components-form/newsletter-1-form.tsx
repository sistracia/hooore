import type { Newsletter1Props } from "@repo/components/types/newsletter-1";
import type { Newsletter1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Newsletter1Form(
  props: Newsletter1Component & {
    projectId: string;
    onChange: (values: Newsletter1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Newsletter1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "newsletter-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
