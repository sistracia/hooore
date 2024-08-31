import type { Blog2Props } from "@repo/components/types/blog-2";
import type { Blog2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Blog2Form(
  props: Blog2Component & {
    projectId: string;
    onChange: (values: Blog2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Blog2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "blog-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
