import type { LogoList4Props } from "@repo/components/types/logo-list-4";
import type { LogoList4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function LogoList4Form(
  props: LogoList4Component & {
    projectId: string;
    onChange: (values: LogoList4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<LogoList4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "logo-list-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
