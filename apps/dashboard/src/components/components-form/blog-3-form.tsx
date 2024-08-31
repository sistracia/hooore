import type { Blog3Props } from "@repo/components/types/blog-3";
import type { Blog3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Blog3Form(
  props: Blog3Component & {
    projectId: string;
    onChange: (values: Blog3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Blog3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "blog-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
