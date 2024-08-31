import type { Pricing2Props } from "@repo/components/types/pricing-2";
import type { Pricing2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Pricing2Form(
  props: Pricing2Component & {
    projectId: string;
    onChange: (values: Pricing2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Pricing2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "pricing-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
