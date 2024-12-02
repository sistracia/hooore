import { cn } from "@repo/utils";
import { type ChangeEvent, useCallback } from "react";
import { Button } from "../components/button";
import { Icon } from "../components/icon";
import { Spinner } from "../components/spinner";
import { useDropZone } from "../hooks/use-drop-zone";
import { useFileUpload } from "../hooks/use-file-upload";
import { useUploader } from "../hooks/use-uploader";

export const ImageUploader = ({
  onUpload,
}: {
  onUpload: (url: string) => void;
}) => {
  const { loading, uploadFile } = useUploader({ onUpload });
  const { handleUploadClick, ref } = useFileUpload();
  const { draggedInside, onDrop, onDragEnter, onDragLeave } = useDropZone({
    uploader: uploadFile,
  });

  const onFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      e.target.files?.[0] ? uploadFile(e.target.files[0]) : null,
    [uploadFile],
  );

  if (loading) {
    return (
      <div className="flex min-h-[10rem] items-center justify-center rounded-lg bg-opacity-80 p-8">
        <Spinner className="text-neutral-500" size={1.5} />
      </div>
    );
  }

  const wrapperClass = cn(
    "flex flex-col items-center justify-center rounded-lg bg-opacity-80 px-8 py-10",
    draggedInside && "bg-neutral-100",
  );

  return (
    <div
      className={wrapperClass}
      onDrop={onDrop}
      onDragOver={onDragEnter}
      onDragLeave={onDragLeave}
      contentEditable={false}
    >
      <Icon
        name="Image"
        className="mb-4 h-12 w-12 text-black opacity-20 dark:text-white"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-center text-sm font-medium text-neutral-400 dark:text-neutral-500">
          {draggedInside ? "Drop image here" : "Drag and drop or"}
        </div>
        <div>
          <Button
            disabled={draggedInside}
            onClick={handleUploadClick}
            variant="primary"
            buttonSize="small"
          >
            <Icon name="Upload" />
            Upload an image
          </Button>
        </div>
      </div>
      <input
        className="h-0 w-0 overflow-hidden opacity-0"
        ref={ref}
        type="file"
        accept=".jpg,.jpeg,.png,.webp,.gif"
        onChange={onFileChange}
      />
    </div>
  );
};
