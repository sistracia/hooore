import type { Blog1Props } from "@repo/components/types/blog-1";
import type { Blog1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Blog1Form(
  props: Blog1Component & {
    projectId: string;
    onChange: (values: Blog1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Blog1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "blog-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
