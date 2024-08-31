import type { Faq1Component } from "@repo/components/types/page-content";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Label } from "../ui/label";
import { Divider } from "../divider";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon } from "@repo/icon";
import { Faq1Props } from "@repo/components/types/Faq-1";
import { Sortable } from "../sortable";
import { SimpleCollapsible } from "../simple-collapsible";
import { FieldGroup } from "../field-group";

type CollapsibleItemProps = {
  index: number;
  action: React.ReactNode;
};

function CollapsibleItem({ index, action }: CollapsibleItemProps) {
  const { control, watch } = useFormContext<Faq1Props>();

  const question = watch(`faq.${index}.question`);
  const answer = watch(`faq.${index}.answer`);

  return (
    <SimpleCollapsible
      initialCollapse={!!question || !!answer}
      label={question}
      action={action}
    >
      <Label>
        Question
        <Controller
          control={control}
          name={`faq.${index}.question`}
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
          name={`faq.${index}.answer`}
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
                placeholder="Enter the answer here"
              />
            );
          }}
        />
      </Label>
    </SimpleCollapsible>
  );
}

export function Faq1Form(
  props: Faq1Component & {
    projectId: string;
    onChange: (values: Faq1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Faq1Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "faq-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "faq",
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
        <FieldGroup label="FAQ">
          <Sortable items={fields} onSwap={swap} onRemove={remove}>
            {({ item, itemIndex, dragButton, removeButton }) => {
              return (
                <CollapsibleItem
                  key={item.id}
                  index={itemIndex}
                  action={
                    <>
                      {dragButton}
                      {removeButton}
                    </>
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
              append({ answer: "", question: "" });
            }}
          >
            Add Question <PlusIcon className="dd-h-4 dd-w-4" />
          </Button>
        </FieldGroup>
      </form>
    </FormProvider>
  );
}
