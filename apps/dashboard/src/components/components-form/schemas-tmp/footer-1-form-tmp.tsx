import type { Footer1Component } from "@repo/components/types/page-content";
import type { Footer1Props } from "@repo/components/types/template-types/footer-1";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Label } from "../../ui/label";
import { Divider } from "../../divider";
import { useEffect } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { AutocompleteLink } from "../../autocomplete-link";
import { Sortable } from "../../sortable";
import { SimpleCollapsible } from "../../simple-collapsible";
import { FieldGroup } from "../../field-group";
import { IconPicker } from "../../icon-picker";
import { Icon } from "@iconify/react";

type LinkCollapsibleItemProps = {
  index: number;
  action: React.ReactNode;
  projectId: string;
};

function LinkCollapsibleItem({
  index,
  action,
  projectId,
}: LinkCollapsibleItemProps) {
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

type SocialCollapsibleItemProps = {
  index: number;
  action: React.ReactNode;
};

function SocialCollapsibleItem({ index, action }: SocialCollapsibleItemProps) {
  const { control, watch } = useFormContext<Footer1Props>();

  const slug = watch(`socials.${index}.slug`);
  const link = watch(`socials.${index}.link`);

  return (
    <SimpleCollapsible
      initialCollapse={!!slug || !!link}
      label={slug && <Icon icon={slug} className="dd-h-4 dd-w-4" />}
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

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "footer-1", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const linkField = useFieldArray({
    control,
    name: "link",
  });

  const socialsFeild = useFieldArray({
    control,
    name: "socials",
  });

  return (
    <FormProvider {...methods}>
      <form>
        <FieldGroup label="Link">
          <Sortable
            items={linkField.fields}
            onSwap={linkField.swap}
            onRemove={linkField.remove}
          >
            {({ item, itemIndex, dragButton, removeButton }) => {
              return (
                <LinkCollapsibleItem
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
              linkField.append({ label: "", link: "" });
            }}
          >
            Add Link <PlusIcon className="dd-h-4 dd-w-4" />
          </Button>
        </FieldGroup>
        <Divider />
        <FieldGroup label="Social Media">
          <Sortable
            items={socialsFeild.fields}
            onSwap={socialsFeild.swap}
            onRemove={socialsFeild.remove}
          >
            {({ item, itemIndex, dragButton, removeButton }) => {
              return (
                <SocialCollapsibleItem
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
              socialsFeild.append({ link: "", slug: "" });
            }}
          >
            Add Social Media <PlusIcon className="dd-h-4 dd-w-4" />
          </Button>
        </FieldGroup>
      </form>
    </FormProvider>
  );
}
