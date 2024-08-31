import type { Team2Props } from "@repo/components/types/team-2";
import type { Team2Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Team2Form(
  props: Team2Component & {
    projectId: string;
    onChange: (values: Team2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Team2Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "team-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
