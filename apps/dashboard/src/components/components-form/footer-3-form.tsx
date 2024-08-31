import type { Footer3Props } from "@repo/components/types/footer-3";
import type { Footer3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Footer3Form(
  props: Footer3Component & {
    projectId: string;
    onChange: (values: Footer3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Footer3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "footer-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
