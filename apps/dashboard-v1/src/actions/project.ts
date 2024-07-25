"use server";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { projectSchema, type ProjectState } from "./project.definition";
import { sql } from "@/lib/db";
import { generateId } from "lucia";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadFile(fileBuffer: Buffer) {
  return await new Promise<UploadApiResponse | undefined>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: process.env.CLOUDINARY_FOLDER,
        },
        (error, uploadResult) => {
          if (error !== undefined) {
            return reject(error);
          }
          return resolve(uploadResult);
        },
      )
      .end(fileBuffer);
  });
}

function validateAddProjectForm(schema: Record<string, unknown>) {
  const validatedFields = projectSchema.safeParse(schema);

  if (!validatedFields.success) {
    return {
      data: null,
      error: Object.values(validatedFields.error.flatten().fieldErrors)
        .map((errors) => {
          return errors.join(", ");
        })
        .join(", "),
    };
  }

  return { data: validatedFields.data, error: null };
}

export async function addProjectAction(
  userId: string,
  formData: FormData,
): Promise<ProjectState> {
  const businessLogo = formData.get("business_logo");

  if (businessLogo === null || !(businessLogo instanceof File)) {
    return {
      error: "",
    };
  }

  const uploadedBusinessLogo = await uploadFile(
    Buffer.from(await businessLogo.arrayBuffer()),
  );

  const validatedAddProjectForm = validateAddProjectForm({
    business_logo: uploadedBusinessLogo?.secure_url,
    business_name: formData.get("business_name"),
    domain: generateId(5),
    social: [
      { type: "email", link: formData.get("social_email") },
      { type: "linkedin", link: formData.get("social_linkedin") },
      { type: "instagram", link: formData.get("social_instagram") },
    ],
    template_code: generateId(5),
    user_id: userId,
  });

  if (validatedAddProjectForm.error !== null) {
    return {
      error: validatedAddProjectForm.error,
    };
  }

  const {
    business_logo,
    business_name,
    domain,
    social,
    template_code,
    user_id,
  } = validatedAddProjectForm.data;

  try {
    await sql<[{ count: number }]>`
        INSERT INTO
            project
            (id, business_name, business_logo, template_code, social, domain, user_id)
        VALUES
            (${generateId(15)}, ${business_name}, ${business_logo}, ${template_code}, ${JSON.stringify(social)}, ${domain}, ${user_id})
        `;
    return {
      error: null,
    };
  } catch (e) {
    console.log(e);
    return {
      error: "An unknown error occurred",
    };
  }
}

export async function userProjectCountAction(userId: string) {
  const result = await sql<[{ count: number }]>`
        SELECT
            COUNT(p.id) as count
        FROM project p
        LEFT JOIN "user" u 
            ON p.user_id = ${userId}
        `;

  return Number(result[0].count);
}
