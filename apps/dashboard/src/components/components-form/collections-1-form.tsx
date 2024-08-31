import type { Collections1Props } from "@repo/components/types/collections-1";
import type { Collections1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Collections1Form(
  props: Collections1Component & {
    projectId: string;
    onChange: (values: Collections1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Collections1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "collections-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
