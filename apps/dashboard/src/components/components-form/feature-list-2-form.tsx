import type { FeaturesList2Props } from "@repo/components/types/feature-list-2";
import type { FeaturesList2Component } from "@repo/components/types/page-content";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { InputFile } from "../input-file";
import { useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon, TrashIcon } from "@repo/icon";
import { FieldGroup } from "../field-group";

function Feature2NameForm() {
  const { control } = useFormContext<FeaturesList2Props>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  return (
    <div>
      <FieldGroup label="Feature List" bordered={false}>
        <div className="dd-mb-2 dd-flex dd-flex-col dd-gap-2">
          {fields.map((field, fieldIndex) => {
            return (
              <div
                key={field.id}
                className="dd-flex dd-h-[40px] dd-items-center dd-justify-center dd-gap-2"
              >
                <Label className="dd-flex-1">
                  <Controller
                    name={`features.${fieldIndex}.name`}
                    control={control}
                    render={({ field }) => {
                      const { name, onBlur, onChange, ref, value, disabled } =
                        field;
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
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="dd-h-full dd-w-[40px]"
                  onClick={() => {
                    remove(fieldIndex);
                  }}
                >
                  <TrashIcon className="dd-h-4 dd-w-4" />
                </Button>
              </div>
            );
          })}
        </div>
        <Button
          type="button"
          variant="outline"
          className="dd-w-full dd-gap-2"
          onClick={() => {
            append({ name: "" });
          }}
        >
          Add List <PlusIcon className="dd-h-4 dd-w-4" />
        </Button>
      </FieldGroup>
    </div>
  );
}

export function FeatureList2Form(
  props: FeaturesList2Component & {
    projectId: string;
    onChange: (values: FeaturesList2Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<FeaturesList2Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "features-list-2", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  return (
    <FormProvider {...methods}>
      <form>
        <Feature2NameForm />
        <Divider />
        <div>
          <FieldGroup label="Logo" bordered={false}>
            {fields.map((field, fieldIndex) => {
              return (
                <Label key={field.id}>
                  <Controller
                    control={control}
                    name={`images.${fieldIndex}.image`}
                    render={({ field }) => {
                      const { onChange, value } = field;
                      return (
                        <InputFile
                          className="dd-mb-4 dd-mt-2"
                          value={value}
                          onChange={(url) => {
                            if (url === "") {
                              remove(fieldIndex);
                              return;
                            }

                            onChange(url);
                          }}
                        />
                      );
                    }}
                  />
                </Label>
              );
            })}
            <Button
              type="button"
              variant="outline"
              className="dd-w-full dd-gap-2"
              onClick={() => {
                append({ image: "" });
              }}
            >
              Add Logo <PlusIcon className="dd-h-4 dd-w-4" />
            </Button>
          </FieldGroup>
        </div>
      </form>
    </FormProvider>
  );
}
