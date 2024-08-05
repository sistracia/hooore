"use server";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { fileSchema } from "./project.definition";
import { zodErrorStringify } from "./utils";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadFile(fileBuffer: Buffer) {
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

  return response.secure_url;
}

export async function uploadFileAction(form: FormData) {
  const file = form.get("file");

  if (file === null || !(file instanceof File) || file.size === 0) {
    return {
      url: undefined,
      error: "File is required.",
    };
  }

  const validatedFile = fileSchema.safeParse(file);

  if (!validatedFile.success) {
    return {
      url: undefined,
      error: zodErrorStringify(validatedFile.error),
    };
  }

  try {
    const url = await uploadFile(Buffer.from(await file.arrayBuffer()));

    return {
      url: url,
      error: null,
    };
  } catch (e) {
    return {
      url: undefined,
      error: "Uncatched error.",
    };
  }
}
