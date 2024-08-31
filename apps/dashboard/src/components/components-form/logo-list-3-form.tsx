import type { LogoList3Props } from "@repo/components/types/logo-list-3";
import type { LogoList3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function LogoList3Form(
  props: LogoList3Component & {
    projectId: string;
    onChange: (values: LogoList3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<LogoList3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "logo-list-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
