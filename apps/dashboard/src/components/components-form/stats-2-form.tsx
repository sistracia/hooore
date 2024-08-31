import type { Stats2Props } from "@repo/components/types/stats-2";
import type { Stats2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Stats2Form(
  props: Stats2Component & {
    projectId: string;
    onChange: (values: Stats2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Stats2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "stats-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
