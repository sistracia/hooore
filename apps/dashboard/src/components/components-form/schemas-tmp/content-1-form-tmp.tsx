import type { Content1Props } from "@repo/components/types/template-types/content-1";
import type { Content1Component } from "@repo/components/types/page-content";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Label } from "../../ui/label";
import { Divider } from "../../divider";
import { Textarea } from "../../ui/textarea";
import { useEffect } from "react";

export function Content1Form(
  props: Content1Component & {
    projectId: string;
    onChange: (values: Content1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Content1Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "content-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form>
        <Label>
          Headline
          <Controller
            name="headline"
            control={control}
            render={({ field }) => {
              const { name, onBlur, onChange, ref, value, disabled } = field;
              return (
                <Textarea
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  disabled={disabled}
                  placeholder="Enter your headline here"
                />
              );
            }}
          />
        </Label>
        <Divider />
        <Label>
          Description
          <Controller
            name="description"
            control={control}
            render={({ field }) => {
              const { name, onBlur, onChange, ref, value, disabled } = field;
              return (
                <Textarea
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  disabled={disabled}
                  placeholder="Enter your description here"
                />
              );
            }}
          />
        </Label>
      </form>
    </FormProvider>
  );
}
