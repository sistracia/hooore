import type { Hero1Props } from "@repo/components/types/hero-1";
import type { Hero1Component } from "@repo/components/types/page-content";
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
import { IconPicker } from "../icon-picker";
import { FieldGroup } from "../field-group";
import { Button } from "../ui/button";
import { PlusIcon } from "@repo/icon";
import { Sortable } from "../sortable";
import { SimpleCollapsible } from "../simple-collapsible";
import { Input } from "../ui/input";
import { renderIcon } from "@repo/icon/map";

type CollapsibleItemProps = {
  index: number;
  action: React.ReactNode;
};

function CollapsibleItem({ index, action }: CollapsibleItemProps) {
  const { control, watch } = useFormContext<Hero1Props>();

  const slug = watch(`socials.${index}.slug`);
  const link = watch(`socials.${index}.link`);

  return (
    <SimpleCollapsible
      initialCollapse={!!slug || !!link}
      label={renderIcon(slug || "", { className: "dd-w-4 dd-h-4" })}
      action={action}
    >
      <Label>
        Icon
        <Controller
          control={control}
          name={`socials.${index}.slug`}
          render={({ field }) => {
            const { onChange, value } = field;
            return <IconPicker value={value} onChange={onChange} />;
          }}
        />
      </Label>
      <Divider withBorder={false} />
      <Label>
        Link
        <Controller
          control={control}
          name={`socials.${index}.link`}
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
                placeholder="Enter the link here"
              />
            );
          }}
        />
      </Label>
    </SimpleCollapsible>
  );
}

export function Hero1Form(
  props: Hero1Component & {
    projectId: string;
    onChange: (values: Hero1Component) => void;
  },
) {
  const { content, onChange } = props;

  const methods = useForm<Hero1Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "socials",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "hero-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form>
        <Label>
          Sub-Headline
          <Controller
            name="sub_headline"
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
                  placeholder="Enter your sub-headline here"
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
        <Divider />
        <FieldGroup label="Social Media" bordered={false}>
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
              append({ slug: "", link: "" });
            }}
          >
            Add Social Media <PlusIcon className="dd-h-4 dd-w-4" />
          </Button>
        </FieldGroup>
      </form>
    </FormProvider>
  );
}
