import type { Pricing3Props } from "@repo/components/types/pricing-3";
import type { Pricing3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Pricing3Form(
  props: Pricing3Component & {
    projectId: string;
    onChange: (values: Pricing3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Pricing3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "pricing-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
