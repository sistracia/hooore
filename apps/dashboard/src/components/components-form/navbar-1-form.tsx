import type { Navbar1Component } from "@repo/components/types/page-content";
import type { Navbar1Props } from "@repo/components/types/nav-bar-1";
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
import { PlusIcon } from "@repo/icon";
import { AutocompleteLink } from "../autocomplete-link";
import { Sortable } from "../sortable";
import { SimpleCollapsible } from "../simple-collapsible";
import { FieldGroup } from "../field-group";

type SubCollapsibleItemProps = {
  index: number;
  itemIndex: number;
  action: React.ReactNode;
  projectId: string;
};

function SubCollapsibleItem({
  index,
  itemIndex,
  action,
  projectId,
}: SubCollapsibleItemProps) {
  const { control, watch } = useFormContext<Navbar1Props>();

  const label = watch(`link.${index}.sub_link.${itemIndex}.label`);
  const link = watch(`link.${index}.sub_link.${itemIndex}.link`);

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
          name={`link.${index}.sub_link.${itemIndex}.label`}
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
          name={`link.${index}.sub_link.${itemIndex}.link`}
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

type SubNavbarFormProps = {
  index: number;
  projectId: string;
};

function SubNavbarForm({ index, projectId }: SubNavbarFormProps) {
  const { control } = useFormContext<Navbar1Props>();

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: `link.${index}.sub_link`,
  });

  return (
    <FieldGroup label="Sub Link">
      <Sortable items={fields} onSwap={swap} onRemove={remove}>
        {({ item, itemIndex, dragButton, removeButton }) => {
          return (
            <SubCollapsibleItem
              key={item.id}
              index={index}
              itemIndex={itemIndex}
              projectId={projectId}
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
          append({ label: "", link: "" });
        }}
      >
        Add Sub Link <PlusIcon className="dd-h-4 dd-w-4" />
      </Button>
    </FieldGroup>
  );
}

type CollapsibleItemProps = {
  index: number;
  action: React.ReactNode;
  projectId: string;
};

function CollapsibleItem({ index, action, projectId }: CollapsibleItemProps) {
  const { control, watch } = useFormContext<Navbar1Props>();

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
      <Divider withBorder={false} />
      <SubNavbarForm index={index} projectId={projectId} />
    </SimpleCollapsible>
  );
}

export function NavbarForm(
  props: Navbar1Component & {
    projectId: string;
    onChange: (values: Navbar1Component) => void;
  },
) {
  const { content, onChange, projectId } = props;

  const methods = useForm<Navbar1Props>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "link",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "navbar-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <FormProvider {...methods}>
      <form>
        <Sortable items={fields} onSwap={swap} onRemove={remove}>
          {({ item, itemIndex, dragButton, removeButton }) => {
            return (
              <CollapsibleItem
                key={item.id}
                index={itemIndex}
                projectId={projectId}
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
            append({ label: "", link: "", sub_link: [] });
          }}
        >
          Add Link <PlusIcon className="dd-h-4 dd-w-4" />
        </Button>
      </form>
    </FormProvider>
  );
}
