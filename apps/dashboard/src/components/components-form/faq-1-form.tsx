import type { FAQ1Component } from "@repo/components/types/page-content";
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
import { PlusIcon } from "@radix-ui/react-icons";
import { FAQ1Props } from "@repo/components/types/faq-1";
import { Sortable } from "../sortable";

export function FAQ1Form(
  props: FAQ1Component & {
    projectId: string;
    onChange: (values: FAQ1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<FAQ1Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "faq",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "faq-1", content: value });
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
          <Sortable items={fields} onSwap={swap} onRemove={remove}>
            {({ item, itemIndex, dragButton, removeButton }) => {
              return (
                <div key={item.id} className="dd-mb-4 dd-rounded-lg dd-border">
                  <div className="dd-gap dd-flex dd-items-center dd-border-b dd-p-2">
                    <Controller
                      control={control}
                      name={`faq.${itemIndex}.question`}
                      render={({ field }) => {
                        const { value } = field;
                        return <span className="dd-flex-1">{value}</span>;
                      }}
                    />
                    <div>
                      {dragButton}
                      {removeButton}
                    </div>
                  </div>
                  <div className="dd-p-2">
                    <Label>
                      Question
                      <Controller
                        control={control}
                        name={`faq.${itemIndex}.question`}
                        render={({ field }) => {
                          const {
                            name,
                            onBlur,
                            onChange,
                            ref,
                            value,
                            disabled,
                          } = field;
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
                        name={`faq.${itemIndex}.answer`}
                        render={({ field }) => {
                          const {
                            name,
                            onBlur,
                            onChange,
                            ref,
                            value,
                            disabled,
                          } = field;
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
            Add Question <PlusIcon className="dd-h-4 dd-w-4" />
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
