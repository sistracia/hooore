import type { Footer4Props } from "@repo/components/types/footer-4";
import type { Footer4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Footer4Form(
  props: Footer4Component & {
    projectId: string;
    onChange: (values: Footer4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Footer4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "footer-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
