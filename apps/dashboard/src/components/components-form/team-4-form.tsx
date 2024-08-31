import type { Team4Props } from "@repo/components/types/team-4";
import type { Team4Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Team4Form(
  props: Team4Component & {
    projectId: string;
    onChange: (values: Team4Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Team4Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "team-4", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
