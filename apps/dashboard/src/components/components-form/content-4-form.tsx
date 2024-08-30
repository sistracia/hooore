import type { Content4Props } from "@repo/components/types/content-4";
import type { Content4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Content4Form(
  props: Content4Component & {
    projectId: string;
    onChange: (values: Content4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Content4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "content-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
