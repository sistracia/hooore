import type { Content6Props } from "@repo/components/types/content-6";
import type { Content6Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Content6Form(
  props: Content6Component & {
    projectId: string;
    onChange: (values: Content6Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Content6Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "content-6", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
