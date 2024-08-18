import type { Footer1Component } from "@repo/components/types/page-content";
import type { Footer1Props } from "@repo/components/types/footer-1";
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
import { AutocompleteLink } from "../autocomplete-link";
import { Sortable } from "../sortable";
import { SimpleCollapsible } from "../simple-collapsible";
import { FieldGroup } from "../field-group";

type CollapsibleItemProps = {
  index: number;
  action: React.ReactNode;
  projectId: string;
};

function CollapsibleItem({ index, action, projectId }: CollapsibleItemProps) {
  const { control, watch } = useFormContext<Footer1Props>();

  const label = watch(`link.${index}.label`);
  const link = watch(`link.${index}.link`);

  return (
    <SimpleCollapsible
      initialCollapse={!!label || !!link}
      label={label}
      action={action}
    >
      <Label>
        Label
        <Controller
          control={control}
          name={`link.${index}.label`}
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
          control={control}
          name={`link.${index}.link`}
          render={({ field }) => {
            const { name, onBlur, onChange, ref, value, disabled } = field;
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
    </SimpleCollapsible>
  );
}

export function Footer1Form(
  props: Footer1Component & {
    projectId: string;
    onChange: (values: Footer1Component) => void;
  },
) {
  const { content, onChange, projectId } = props;

  const methods = useForm<Footer1Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "link",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "footer-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form>
        <FieldGroup label="Link">
          <Sortable items={fields} onSwap={swap} onRemove={remove}>
            {({ item, itemIndex, dragButton, removeButton }) => {
              return (
                <CollapsibleItem
                  key={item.id}
                  index={itemIndex}
                  projectId={projectId}
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
            Add Link <PlusIcon className="dd-h-4 dd-w-4" />
          </Button>
        </FieldGroup>
      </form>
    </FormProvider>
  );
}
