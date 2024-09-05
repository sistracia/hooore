import type { FeaturesList1Props } from "@repo/components/types/features-list-1";
import type { FeaturesList1Component } from "@repo/components/types/page-content";
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
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { AutocompleteLink } from "../autocomplete-link";
import { FieldGroup } from "../field-group";

type Feature1NameFormProps = {
  index: number;
};

function Feature1NameForm({ index }: Feature1NameFormProps) {
  const { control } = useFormContext<FeaturesList1Props>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `features.${index}.features`,
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
                    name={`features.${index}.features.${fieldIndex}.name`}
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

export function FeaturesList1Form(
  props: FeaturesList1Component & {
    projectId: string;
    onChange: (values: FeaturesList1Component) => void;
  },
) {
  const { content, onChange, projectId } = props;

  const methods = useForm<FeaturesList1Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "features-list-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const { fields, append } = useFieldArray({
    control,
    name: "features",
  });

  return (
    <FormProvider {...methods}>
      <form>
        <Label>
          Tag
          <Controller
            name="tag"
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
                  placeholder="Enter the tag here"
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
        {fields.map((field, fieldIndex) => {
          return (
            <div
              key={field.id}
              className="dd-mb-4 dd-rounded-lg dd-border dd-p-6"
            >
              <span className="dd-mb-2 dd-block">Feature {fieldIndex + 1}</span>
              <Label>
                Image
                <Controller
                  control={control}
                  name={`features.${fieldIndex}.image`}
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
              <Divider />
              <Label>
                Headline
                <Controller
                  name={`features.${fieldIndex}.headline`}
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
                  name={`features.${fieldIndex}.description`}
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
                        placeholder="Enter your description here"
                      />
                    );
                  }}
                />
              </Label>
              <Divider />
              <Feature1NameForm index={fieldIndex} />
              <Divider />
              <FieldGroup label="Call To Action" bordered={false}>
                <Label>
                  Button Label
                  <Controller
                    name={`features.${fieldIndex}.cta_button_label`}
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
                    name={`features.${fieldIndex}.cta_link`}
                    control={control}
                    render={({ field }) => {
                      const { name, onBlur, onChange, ref, value, disabled } =
                        field;
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
            </div>
          );
        })}
        <Button
          type="button"
          variant="outline"
          className="dd-w-full dd-gap-2"
          onClick={() => {
            append({
              cta_button_label: "",
              cta_link: "",
              description: "",
              features: [],
              headline: "",
              image: "",
            });
          }}
        >
          Add Feature <PlusIcon className="dd-h-4 dd-w-4" />
        </Button>
      </form>
    </FormProvider>
  );
}
