import type { Testimonials2Props } from "@repo/components/types/testimonials-2";
import type { Testimonials2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Testimonials2Form(
  props: Testimonials2Component & {
    projectId: string;
    onChange: (values: Testimonials2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Testimonials2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "testimonials-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
