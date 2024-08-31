import type { Team1Props } from "@repo/components/types/team-1";
import type { Team1Component } from "@repo/components/types/page-content";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export function Team1Form(
  props: Team1Component & {
    projectId: string;
    onChange: (values: Team1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Team1Props>({
    defaultValues: content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "team-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form></form>
    </FormProvider>
  );
}
