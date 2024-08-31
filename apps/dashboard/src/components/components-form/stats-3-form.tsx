import type { Stats3Props } from "@repo/components/types/stats-3";
import type { Stats3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Stats3Form(
  props: Stats3Component & {
    projectId: string;
    onChange: (values: Stats3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Stats3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "stats-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
