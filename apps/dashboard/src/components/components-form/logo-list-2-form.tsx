import type { LogoList2Props } from "@repo/components/types/logo-list-2";
import type { LogoList2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function LogoList2Form(
  props: LogoList2Component & {
    projectId: string;
    onChange: (values: LogoList2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<LogoList2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "logo-list-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
