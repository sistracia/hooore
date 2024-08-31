import type { Testimonials3Props } from "@repo/components/types/testimonials-3";
import type { Testimonials3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Testimonials3Form(
  props: Testimonials3Component & {
    projectId: string;
    onChange: (values: Testimonials3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Testimonials3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "testimonials-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
