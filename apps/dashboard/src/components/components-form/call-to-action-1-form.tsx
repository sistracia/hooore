import type { CallToAction1Props } from "@repo/components/types/call-to-action-1";
import type { CallToAction1Component } from "@repo/components/types/page-content";
import { Controller, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { InputFile } from "../input-file";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";
import { Input } from "../ui/input";
import { AutocompleteLink } from "../autocomplete-link";
import { FieldGroup } from "../field-group";

export function CallToAction1Form(
  props: CallToAction1Component & {
    projectId: string;
    onChange: (values: CallToAction1Component) => void;
  },
) {
  const { content, onChange, projectId } = props;

  const { control, watch } = useForm<CallToAction1Props>({
    defaultValues: content,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "call-to-action-1", content: value });
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
      <Divider />
      <FieldGroup label="Call To Action">
        <Label>
          Button Label
          <Controller
            name="cta_button_label"
            control={control}
            render={({ field }) => {
              const { name, onBlur, onChange, ref, value, disabled } = field;
              return (
                <Input
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  disabled={disabled}
                  placeholder="Enter the label here"
                />
              );
            }}
          />
        </Label>
        <Divider withBorder={false} />
        <Label>
          Link
          <Controller
            name="cta_link"
            control={control}
            render={({ field }) => {
              const { name, onBlur, onChange, ref, value, disabled } = field;
              return (
                <AutocompleteLink
                  projectId={projectId}
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  disabled={disabled}
                  placeholder="Enter the link here"
                />
              );
            }}
          />
        </Label>
      </FieldGroup>
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
