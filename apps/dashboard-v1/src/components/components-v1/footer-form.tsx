import type { FooterComponent } from "@repo/components-v1/types/page-content";
import type { FooterProps } from "@repo/components-v1/types/footer";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
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
import { AutocompleteLink } from "../autocomplete-link";

export function FooterForm(
  props: FooterComponent & {
    projectId: string;
    onChange: (values: FooterComponent) => void;
  },
) {
  const { content, onChange, projectId } = props;

  const methods = useForm<FooterProps>({
    defaultValues: content,
  });

  const { control, watch } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "link",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "footer", content: value });
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
              <div key={field.id} className="dd-mb-4 dd-rounded-lg dd-border">
                <div className="dd-gap dd-flex dd-items-center dd-border-b dd-p-2">
                  <Controller
                    control={control}
                    name={`link.${fieldIndex}.label`}
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
                    Label
                    <Controller
                      control={control}
                      name={`link.${fieldIndex}.label`}
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
                      name={`link.${fieldIndex}.link`}
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
          })}
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
