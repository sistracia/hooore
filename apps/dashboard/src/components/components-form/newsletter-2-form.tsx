import type { Newsletter2Props } from "@repo/components/types/newsletter-2";
import type { Newsletter2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Newsletter2Form(
  props: Newsletter2Component & {
    projectId: string;
    onChange: (values: Newsletter2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Newsletter2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "newsletter-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
