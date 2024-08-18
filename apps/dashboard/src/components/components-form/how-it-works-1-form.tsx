import type { HowItWorks1Component } from "@repo/components/types/page-content";
import type { HowItWorks1Props } from "@repo/components/types/how-it-works-1";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";
import { Sortable } from "../sortable";
import { SimpleCollapsible } from "../simple-collapsible";
import { FieldGroup } from "../field-group";

type CollapsibleItemProps = {
  index: number;
  itemIndex: number;
  action: React.ReactNode;
};

function CollapsibleItem({ index, itemIndex, action }: CollapsibleItemProps) {
  const { control, watch } = useFormContext<HowItWorks1Props>();

  const name = watch(`step.${index}.task.${itemIndex}.name`);
  const description = watch(`step.${index}.task.${itemIndex}.description`);

  return (
    <SimpleCollapsible
      initialCollapse={!!name || !!description}
      label={name}
      action={action}
    >
      <Label>
        Task
        <Controller
          control={control}
          name={`step.${index}.task.${itemIndex}.name`}
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
                placeholder="Enter the task here"
              />
            );
          }}
        />
      </Label>
      <Divider withBorder={false} />
      <Label>
        Description
        <Controller
          control={control}
          name={`step.${index}.task.${itemIndex}.description`}
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
                placeholder="Enter the description here"
              />
            );
          }}
        />
      </Label>
    </SimpleCollapsible>
  );
}

type TaskProps = {
  index: number;
};

function Task({ index }: TaskProps) {
  const { control } = useFormContext<HowItWorks1Props>();

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: `step.${index}.task`,
  });

  return (
    <FieldGroup label="Task">
      <Sortable items={fields} onSwap={swap} onRemove={remove}>
        {({ item, itemIndex, dragButton, removeButton }) => {
          return (
            <CollapsibleItem
              key={item.id}
              index={index}
              itemIndex={itemIndex}
              action={
                <div>
                  {dragButton}
                  {removeButton}
                </div>
              }
            />
          );
        }}
      </Sortable>

      <Button
        type="button"
        variant="outline"
        className="dd-w-full dd-gap-2"
        onClick={() => {
          append({});
        }}
      >
        Add Task <PlusIcon className="dd-h-4 dd-w-4" />
      </Button>
    </FieldGroup>
  );
}

export function HowItWorks1Form(
  props: HowItWorks1Component & {
    projectId: string;
    onChange: (values: HowItWorks1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<HowItWorks1Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append } = useFieldArray({
    control,
    name: "step",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "how-it-works-1", content: value });
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
              className="dd-mb-4 dd-rounded-lg dd-border dd-p-2"
            >
              <Label>
                Headline
                <Controller
                  control={control}
                  name={`step.${fieldIndex}.headine`}
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
                        placeholder="Enter the headline here"
                      />
                    );
                  }}
                />
              </Label>
              <Divider />
              <Task index={fieldIndex} />
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
          Add Step <PlusIcon className="dd-h-4 dd-w-4" />
        </Button>
      </form>
    </FormProvider>
  );
}
