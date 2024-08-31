import type { Collections3Props } from "@repo/components/types/collections-3";
import type { Collections3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Collections3Form(
  props: Collections3Component & {
    projectId: string;
    onChange: (values: Collections3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Collections3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "collections-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
