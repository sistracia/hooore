import type { LogoListProps } from "@repo/components/types/logo-list";
import type { LogoListComponent } from "@repo/components/types/page-content";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { InputFile } from "../input-file";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export function LogoListForm(
  props: LogoListComponent & {
    projectId: string;
    onChange: (values: LogoListComponent) => void;
  },
) {
  const { content, onChange } = props;

  const { control, watch } = useForm<LogoListProps>({
    defaultValues: content,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({ slug: "logo-list", content: value });
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <form>
      {fields.map((field, fieldIndex) => {
        return (
          <Label key={field.id}>
            Logo {fieldIndex + 1}
            <Controller
              control={control}
              name={`images.${fieldIndex}.image`}
              render={({ field }) => {
                const { onChange, value } = field;
                return (
                  <InputFile
                    className="dd-mb-4 dd-mt-2"
                    value={value}
                    onChange={(url) => {
                      if (url === "") {
                        remove(fieldIndex);
                        return;
                      }
                      onChange(url);
                    }}
                  />
                );
              }}
            />
          </Label>
        );
      })}
      <Button
        type="button"
        variant="outline"
        className="dd-w-full dd-gap-2"
        onClick={() => {
          append({ image: "" });
        }}
      >
        Add Logo <PlusIcon className="dd-h-4 dd-w-4" />
      </Button>
    </form>
  );
}
