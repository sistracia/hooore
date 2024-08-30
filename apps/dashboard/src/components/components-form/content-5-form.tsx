import type { Content5Props } from "@repo/components/types/content-5";
import type { Content5Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Content5Form(
  props: Content5Component & {
    projectId: string;
    onChange: (values: Content5Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Content5Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "content-5", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
