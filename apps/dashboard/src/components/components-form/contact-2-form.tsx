import type { Contact2Props } from "@repo/components/types/contact-2";
import type { Contact2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Contact2Form(
  props: Contact2Component & {
    projectId: string;
    onChange: (values: Contact2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Contact2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "contact-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
