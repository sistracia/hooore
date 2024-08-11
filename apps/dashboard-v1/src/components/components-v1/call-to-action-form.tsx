import type { CallToActionProps } from "@repo/components-v1/types/call-to-action";
import type { CallToActionComponent } from "@repo/components-v1/types/page-content";
import { Controller, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { InputFile } from "../input-file";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";
import { Input } from "../ui/input";

export function CallToActionForm(
  props: CallToActionComponent & {
    onChange: (values: CallToActionComponent) => void;
  },
) {
  const { content, onChange } = props;

  const { control, watch } = useForm<CallToActionProps>({
    defaultValues: content,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "call-to-action", content: value });
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
      <div className="dd-rounded-lg dd-border dd-p-6">
        <span className="dd-mb-2 dd-block dd-font-semibold">
          Call To Action
        </span>
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
                  placeholder="Type here..."
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
                <Input
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  disabled={disabled}
                  placeholder="Type here..."
                />
              );
            }}
          />
        </Label>
      </div>
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
