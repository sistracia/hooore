import type { Gallery3Props } from "@repo/components/types/gallery-3";
import type { Gallery3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Gallery3Form(
  props: Gallery3Component & {
    projectId: string;
    onChange: (values: Gallery3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Gallery3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "gallery-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
