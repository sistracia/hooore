import type { Team3Props } from "@repo/components/types/team-3";
import type { Team3Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Team3Form(
  props: Team3Component & {
    projectId: string;
    onChange: (values: Team3Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Team3Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "team-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
