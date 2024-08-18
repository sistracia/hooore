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
import { PlusIcon } from "@radix-ui/react-icons";
import { AutocompleteLink } from "../autocomplete-link";
import { Sortable } from "../sortable";

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
    <div className="dd-rounded-lg dd-border dd-p-6">
      <span className="dd-mb-2 dd-block dd-font-semibold">Sub Link</span>
      <Sortable items={fields} onSwap={swap} onRemove={remove}>
        {({ item, itemIndex, dragButton, removeButton }) => {
          return (
            <div key={item.id} className="dd-mb-4 dd-rounded-lg dd-border">
              <div className="dd-gap dd-flex dd-items-center dd-border-b dd-p-2">
                <Controller
                  control={control}
                  name={`link.${index}.sub_link.${itemIndex}.label`}
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
                  Label
                  <Controller
                    control={control}
                    name={`link.${index}.sub_link.${itemIndex}.label`}
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
                      const { name, onBlur, onChange, ref, value, disabled } =
                        field;
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
        Add Sub Link <PlusIcon className="dd-h-4 dd-w-4" />
      </Button>
    </div>
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
        <div className="dd-rounded-lg dd-border dd-p-6">
          <span className="dd-mb-2 dd-block dd-font-semibold">Link</span>
          <Sortable items={fields} onSwap={swap} onRemove={remove}>
            {({ item, itemIndex, dragButton, removeButton }) => {
              return (
                <div key={item.id} className="dd-mb-4 dd-rounded-lg dd-border">
                  <div className="dd-gap dd-flex dd-items-center dd-border-b dd-p-2">
                    <Controller
                      control={control}
                      name={`link.${itemIndex}.label`}
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
                      Label
                      <Controller
                        control={control}
                        name={`link.${itemIndex}.label`}
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
                        name={`link.${itemIndex}.link`}
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
                    <SubNavbarForm index={itemIndex} projectId={projectId} />
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
            Add Link <PlusIcon className="dd-h-4 dd-w-4" />
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
