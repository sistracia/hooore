import type { Hero4Props } from "@repo/components/types/hero-4";
import type { Hero4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Hero4Form(
  props: Hero4Component & {
    projectId: string;
    onChange: (values: Hero4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Hero4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "hero-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
