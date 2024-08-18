"use client";

import { cn } from "@repo/utils";
import { TrashIcon, UploadIcon } from "@repo/icon";
import { Button } from "./ui/button";
import { uploadFileAction } from "@/actions/upload-file";
import { useState } from "react";

export type InputFileProps = {
  className?: string;
  value?: string;
  onChange?: (url: string) => void;
  onError?: (error?: string) => void;
};

export function InputFile({
  onChange,
  className,
  onError,
  value = "",
}: InputFileProps) {
  const [loading, setLoading] = useState(false);

  const onFileListChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }

    if (
      event.currentTarget.files !== null &&
      event.currentTarget.files[0] !== undefined
    ) {
      const formData = new FormData();
      formData.set("file", event.currentTarget.files[0]);

      setLoading(true);
      uploadFileAction(formData)
        .then((res) => {
          if (!res.success) {
            return onError?.(res.error);
          }

          if (!res.data) {
            return;
          }

          onChange(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className={cn("dd-flex dd-h-[40px] dd-w-full dd-gap-2", className)}>
      {value !== "" && (
        <img
          src={value}
          className="dd-h-full dd-w-[40px] dd-rounded-md dd-border"
        />
      )}
      <div className="dd-flex dd-h-full dd-flex-1 dd-items-center dd-justify-between dd-overflow-hidden dd-rounded-md dd-border dd-px-3 dd-py-2">
        <span
          className={cn(
            "dd-flex-1 dd-overflow-hidden dd-text-ellipsis dd-whitespace-nowrap dd-text-sm",
            value === "" && "dd-text-muted-foreground",
          )}
        >
          {loading ? "Uploading..." : value === "" ? "Choose File" : value}
        </span>
        <UploadIcon className="dd-h-4 dd-w-4" />
        <input type="file" className="dd-hidden" onChange={onFileListChange} />
      </div>
      {value !== "" && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="dd-h-full dd-w-[40px]"
          onClick={() => {
            onChange?.("");
          }}
        >
          <TrashIcon className="dd-h-4 dd-w-4" />
        </Button>
      )}
    </div>
  );
}
