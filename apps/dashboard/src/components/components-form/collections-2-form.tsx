import type { Collections2Props } from "@repo/components/types/collections-2";
import type { Collections2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Collections2Form(
  props: Collections2Component & {
    projectId: string;
    onChange: (values: Collections2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Collections2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "collections-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
