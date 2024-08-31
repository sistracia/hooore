import type { Pricing1Props } from "@repo/components/types/pricing-1";
import type { Pricing1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Pricing1Form(
  props: Pricing1Component & {
    projectId: string;
    onChange: (values: Pricing1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Pricing1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "pricing-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
