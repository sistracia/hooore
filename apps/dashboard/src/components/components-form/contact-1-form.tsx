import type { Contact1Props } from "@repo/components/types/contact-1";
import type { Contact1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Contact1Form(
  props: Contact1Component & {
    projectId: string;
    onChange: (values: Contact1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Contact1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "contact-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
