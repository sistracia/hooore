import type { Stats1Props } from "@repo/components/types/stats-1";
import type { Stats1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Stats1Form(
  props: Stats1Component & {
    projectId: string;
    onChange: (values: Stats1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Stats1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "stats-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
