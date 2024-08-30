import type { Hero5Props } from "@repo/components/types/hero-5";
import type { Hero5Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Hero5Form(
  props: Hero5Component & {
    projectId: string;
    onChange: (values: Hero5Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Hero5Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "hero-5", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
