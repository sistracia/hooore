"use client";
import { cn } from "@repo/utils";
import { TrashIcon, UploadIcon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

export type InputFileProps = React.ComponentPropsWithoutRef<"input"> & {
  name?: string;
};

export function InputFile({
  name,
  onChange,

  className,
  ...restProps
}: InputFileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<FileList | null>(null);

  const file = fileList !== null ? fileList[0] : undefined;
  const imagePreview = file !== undefined ? URL.createObjectURL(file) : null;

  const onFileListChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.currentTarget.files !== null &&
      event.currentTarget.files[0] !== undefined
    ) {
      setFileList(event.currentTarget.files);
      return;
    }
    onChange?.(event);
  };

  return (
    <div className={cn("dd-flex dd-h-[40px] dd-gap-2", className)}>
      {imagePreview !== null && (
        <img
          src={imagePreview}
          className="dd-h-full dd-w-[40px] dd-rounded-md dd-border"
          onLoad={() => {
            URL.revokeObjectURL(imagePreview);
          }}
        />
      )}
      <div className="dd-flex dd-h-full dd-flex-1 dd-items-center dd-justify-between dd-rounded-md dd-border dd-px-3 dd-py-2">
        <span
          className={cn(
            "dd-flex-1",
            file === undefined && "dd-text-muted-foreground",
          )}
        >
          {file === undefined ? "Choose File" : file.name}
        </span>
        <UploadIcon className="dd-h-4 dd-w-4" />
        <Input
          {...restProps}
          name={name}
          type="file"
          className="dd-hidden"
          ref={fileInputRef}
          onChange={onFileListChange}
        />
      </div>
      {imagePreview !== null && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="dd-h-full dd-w-[40px]"
          onClick={() => {
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
            setFileList(null);
          }}
        >
          <TrashIcon className="dd-h-4 dd-w-4" />
        </Button>
      )}
    </div>
  );
}
