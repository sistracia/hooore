import { Hero2Props } from "@repo/components/types/hero-2";
import type { Hero2Component } from "@repo/components/types/page-content";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { Textarea } from "../ui/textarea";
import { FieldGroup } from "../field-group";
import { Input } from "../ui/input";
import { AutocompleteLink } from "../autocomplete-link";

export function Hero2Form(
  props: Hero2Component & {
    projectId: string;
    onChange: (values: Hero2Component) => void;
  },
) {
  const { projectId, content, onChange } = props;

  const methods = useForm<Hero2Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "hero-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
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
        <FieldGroup label="Left Button">
          <Label>
            Button Label
            <Controller
              name="left_button.label"
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
              name="left_button.link"
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
        <FieldGroup label="Right Button">
          <Label>
            Button Label
            <Controller
              name="right_button.label"
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
              name="right_button.link"
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
      </form>
    </FormProvider>
  );
}
