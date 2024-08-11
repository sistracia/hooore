import type { Content1Props } from "@repo/components-v1/types/content-1";
import type { Content1Component } from "@repo/components-v1/types/page-content";
import { Controller, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";

export function Content1Form(
  props: Content1Component & {
    onChange: (values: Content1Component) => void;
  },
) {
  const { content, onChange } = props;

  const { control, watch } = useForm<Content1Props>({
    defaultValues: content,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "content-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
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
  );
}
