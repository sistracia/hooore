import type { Gallery1Props } from "@repo/components/types/gallery-1";
import type { Gallery1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Gallery1Form(
  props: Gallery1Component & {
    projectId: string;
    onChange: (values: Gallery1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Gallery1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "gallery-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
