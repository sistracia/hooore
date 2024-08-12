import type { FAQComponent } from "@repo/components-v1/types/page-content";
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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DragHandleDots2Icon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { FAQProps } from "@repo/components-v1/types/faq";

export function FAQForm(
  props: FAQComponent & {
    projectId: string;
    onChange: (values: FAQComponent) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<FAQProps>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "faq",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "faq", content: value });
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
          Caption
          <Controller
            name="caption"
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
                  placeholder="Enter your caption here"
                />
              );
            }}
          />
        </Label>
        <Divider />
        <div className="dd-rounded-lg dd-border dd-p-6">
          <span className="dd-mb-2 dd-block dd-font-semibold">FAQ</span>
          {fields.map((field, fieldIndex) => {
            return (
              <div key={field.id} className="dd-mb-4 dd-rounded-lg dd-border">
                <div className="dd-gap dd-flex dd-items-center dd-border-b dd-p-2">
                  <Controller
                    control={control}
                    name={`faq.${fieldIndex}.question`}
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
                    Question
                    <Controller
                      control={control}
                      name={`faq.${fieldIndex}.question`}
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
                            placeholder="Enter the question here"
                          />
                        );
                      }}
                    />
                  </Label>
                  <Divider withBorder={false} />
                  <Label>
                    Answer
                    <Controller
                      control={control}
                      name={`faq.${fieldIndex}.answer`}
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
                            placeholder="Enter the answer here"
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
            Add Question <PlusIcon className="dd-h-4 dd-w-4" />
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
