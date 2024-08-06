"use server";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { validateFileSchema } from "./project.definition";
import { Result } from "@/types/result";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadFile(fileBuffer: Buffer): Promise<Result<string>> {
  try {
    const response = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: process.env.CLOUDINARY_FOLDER,
          },
          (error, uploadResult) => {
            if (error !== undefined || !uploadResult) {
              return reject(error?.message);
            }
            return resolve(uploadResult);
          },
        )
        .end(fileBuffer);
    });

    return { data: response.secure_url, success: true };
  } catch {
    return { success: false, error: "UF: Uncatched error." };
  }
}

export async function uploadFileAction(
  form: FormData,
): Promise<Result<string>> {
  const file = form.get("file");

  if (file === null || !(file instanceof File) || file.size === 0) {
    return {
      success: false,
      error: "File is required.",
    };
  }

  const validatedFile = validateFileSchema(file);
  if (!validatedFile.success) {
    return validatedFile;
  }

  const result = await uploadFile(Buffer.from(await file.arrayBuffer()));
  if (!result.success) {
    return result;
  }

  return {
    success: true,
    data: result.data,
  };
}
