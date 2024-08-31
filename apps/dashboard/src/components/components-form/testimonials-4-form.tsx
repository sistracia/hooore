import type { Testimonials4Props } from "@repo/components/types/testimonials-4";
import type { Testimonials4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Testimonials4Form(
  props: Testimonials4Component & {
    projectId: string;
    onChange: (values: Testimonials4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Testimonials4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "testimonials-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
