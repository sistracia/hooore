import type { Content3Props } from "@repo/components-v1/types/content-3";
import type { Content3Component } from "@repo/components-v1/types/page-content";
import { Controller, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";

export function Content3Form(
  props: Content3Component & {
    onChange: (values: Content3Component) => void;
  },
) {
  const { content, onChange } = props;

  const { control, watch } = useForm<Content3Props>({
    defaultValues: content,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "content-3", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <form>
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
