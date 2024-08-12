import type { HeroProps } from "@repo/components-v1/types/hero";
import type { HeroComponent } from "@repo/components-v1/types/page-content";
import { Controller, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { InputFile } from "../input-file";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";

export function HeroForm(
  props: HeroComponent & {
    projectId: string;
    onChange: (values: HeroComponent) => void;
  },
) {
  const { content, onChange } = props;

  const { control, watch } = useForm<HeroProps>({
    defaultValues: content,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "hero", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <form>
      <Label>
        Sub-Headline
        <Controller
          name="sub_headline"
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
                placeholder="Enter your sub-headline here"
              />
            );
          }}
        />
      </Label>
      <Divider />
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
        Background
        <Controller
          control={control}
          name="background"
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <InputFile
                className="dd-mb-4 dd-mt-2"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />
      </Label>
    </form>
  );
}
