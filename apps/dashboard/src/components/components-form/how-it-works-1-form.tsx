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
import {
  DragHandleDots2Icon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";

type TaskProps = {
  index: number;
};

function Task({ index }: TaskProps) {
  const { control } = useFormContext<HowItWorks1Props>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `step.${index}.task`,
  });

  return (
    <div className="dd-rounded-lg dd-border dd-p-6">
      <span className="dd-mb-2 dd-block dd-font-semibold">Task</span>
      {fields.map((field, fieldIndex) => {
        return (
          <div key={field.id} className="dd-mb-4 dd-rounded-lg dd-border">
            <div className="dd-gap dd-flex dd-items-center dd-border-b dd-p-2">
              <Controller
                control={control}
                name={`step.${index}.task.${fieldIndex}.name`}
                render={({ field }) => {
                  const { value } = field;
                  return <span className="dd-flex-1">{value}</span>;
                }}
              />
              <div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="dd-h-[40px] dd-w-[40px]"
                  onClick={() => {
                    remove(fieldIndex);
                  }}
                >
                  <DragHandleDots2Icon className="dd-h-4 dd-w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="dd-h-[40px] dd-w-[40px]"
                  onClick={() => {
                    remove(fieldIndex);
                  }}
                >
                  <TrashIcon className="dd-h-4 dd-w-4" />
                </Button>
              </div>
            </div>
            <div className="dd-p-2">
              <Label>
                Task
                <Controller
                  control={control}
                  name={`step.${index}.task.${fieldIndex}.name`}
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
                  name={`step.${index}.task.${fieldIndex}.description`}
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
                        placeholder="Enter the description here"
                      />
                    );
                  }}
                />
              </Label>
            </div>
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
        Add Task <PlusIcon className="dd-h-4 dd-w-4" />
      </Button>
    </div>
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
        <div className="dd-rounded-lg dd-border dd-p-6">
          <span className="dd-mb-2 dd-block dd-font-semibold">Link</span>
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
        </div>
      </form>
    </FormProvider>
  );
}
