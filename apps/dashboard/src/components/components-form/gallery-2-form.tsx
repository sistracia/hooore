import type { Gallery2Props } from "@repo/components/types/gallery-2";
import type { Gallery2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Gallery2Form(
  props: Gallery2Component & {
    projectId: string;
    onChange: (values: Gallery2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Gallery2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "gallery-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
