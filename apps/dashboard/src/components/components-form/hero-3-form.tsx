import type { Hero3Props } from "@repo/components/types/hero-3";
import type { Hero3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Hero3Form(
  props: Hero3Component & {
    projectId: string;
    onChange: (values: Hero3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Hero3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "hero-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
