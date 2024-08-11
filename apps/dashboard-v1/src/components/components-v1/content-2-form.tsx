import type { Content2Props } from "@repo/components-v1/types/content-2";
import type { Content2Component } from "@repo/components-v1/types/page-content";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export function Content2Form(
  props: Content2Component & {
    onChange: (values: Content2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Content2Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append } = useFieldArray({
    control,
    name: "content",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "content-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form>
        {fields.map((field, fieldIndex) => {
          return (
            <div
              key={field.id}
              className="dd-mb-4 dd-rounded-lg dd-border dd-p-6"
            >
              <span className="dd-mb-2 dd-block">Content {fieldIndex + 1}</span>

              <Label>
                Headline
                <Controller
                  name={`content.${fieldIndex}.headline`}
                  control={control}
                  render={({ field }) => {
                    const { name, onBlur, onChange, ref, value, disabled } =
                      field;
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
                  name={`content.${fieldIndex}.description`}
                  control={control}
                  render={({ field }) => {
                    const { name, onBlur, onChange, ref, value, disabled } =
                      field;
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
            </div>
          );
        })}
        <Button
          type="button"
          variant="outline"
          className="dd-w-full dd-gap-2"
          onClick={() => {
            append({});
          }}
        >
          Add Content <PlusIcon className="dd-h-4 dd-w-4" />
        </Button>
      </form>
    </FormProvider>
  );
}
