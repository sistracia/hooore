import type { Testimonials1Props } from "@repo/components/types/testimonials-1";
import type { Testimonials1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Testimonials1Form(
  props: Testimonials1Component & {
    projectId: string;
    onChange: (values: Testimonials1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Testimonials1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "testimonials-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
