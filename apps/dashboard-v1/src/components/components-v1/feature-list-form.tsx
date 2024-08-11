import type {
  HorizontalFeaturesListProps,
  VerticalFeaturesListProps,
} from "@repo/components-v1/types/feature-list";
import type {
  HorizontalFeaturesListComponent,
  VerticalFeaturesListComponent,
} from "@repo/components-v1/types/page-content";
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

type VerticalFeatureNameFormProps = {
  index: number;
};

// Both UI for vertical and horizontal feature list component are same
function VerticalFeatureNameForm({ index }: VerticalFeatureNameFormProps) {
  const { control } = useFormContext<VerticalFeaturesListProps>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `features.${index}.features` as "features.0.features",
  });

  return (
    <div>
      <span className="dd-mb-2 dd-block dd-font-semibold">Feature List</span>
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
    </div>
  );
}

// Both UI for vertical and horizontal feature list component are same
function HorizontalFeatureNameForm() {
  const { control } = useFormContext<HorizontalFeaturesListProps>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  return (
    <div>
      <span className="dd-mb-2 dd-block dd-font-semibold">Feature List</span>
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
    </div>
  );
}

export function VerticalFeatureListForm(
  props: VerticalFeaturesListComponent & {
    onChange: (values: VerticalFeaturesListComponent) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<VerticalFeaturesListProps>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append } = useFieldArray({
    control,
    name: "features",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "vertical-features-list", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

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
              <VerticalFeatureNameForm index={fieldIndex} />
              <Divider />
              <span className="dd-mb-2 dd-block dd-font-semibold">
                Call To Action
              </span>
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
                  name={`features.${fieldIndex}.cta_link`}
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
          Add Feature <PlusIcon className="dd-h-4 dd-w-4" />
        </Button>
      </form>
    </FormProvider>
  );
}

export function HorizontalFeatureListForm(
  props: HorizontalFeaturesListComponent & {
    onChange: (values: HorizontalFeaturesListComponent) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<HorizontalFeaturesListProps>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "horizontal-features-list", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form>
        <HorizontalFeatureNameForm />
        <Divider />
        <div>
          <span className="dd-mb-2 dd-block dd-font-semibold">Logo</span>
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
        </div>
        <Button
          type="button"
          variant="outline"
          className="dd-w-full dd-gap-2"
          onClick={() => {
            append({});
          }}
        >
          Add Logo <PlusIcon className="dd-h-4 dd-w-4" />
        </Button>
      </form>
    </FormProvider>
  );
}
