import type { Footer2Props } from "@repo/components/types/footer-2";
import type { Footer2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Footer2Form(
  props: Footer2Component & {
    projectId: string;
    onChange: (values: Footer2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Footer2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "footer-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
