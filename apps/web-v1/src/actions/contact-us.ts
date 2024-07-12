"use server";

import { transporter } from "@/lib/mail";
import {
  contactUsSchema,
  type ContactUsFormState,
} from "./contact-us.definition";
import { z } from "zod";

export async function contactUs(input: z.infer<typeof contactUsSchema>) {
  const {
    name,
    phone,
    email,
    company,
    interest,
    budget,
    timeline,
    referral_code,
  } = input;

  let emailText = "";
  let emailHtml = "";

  if (name) {
    const lineText = `Nama calon pelanggan: ${name}`;
    emailText += lineText + "\n";
    emailHtml += lineText + "<br />";
  }

  if (phone) {
    const lineText = `Kontak calon pelanggan: ${phone}`;
    emailText += lineText + "\n";
    emailHtml += lineText + "<br />";
  }

  if (email) {
    const lineText = `Email calon pelanggan: ${email}`;
    emailText += lineText + "\n";
    emailHtml += lineText + "<br />";
  }

  if (company) {
    const lineText = `Perusahaan calon pelanggan: ${company}`;
    emailText += lineText + "\n";
    emailHtml += lineText + "<br />";
  }

  if (interest) {
    const lineText = `Calon pelanggan tertarik pada: ${interest.join(", ")}`;
    emailText += lineText + "\n";
    emailHtml += lineText + "<br />";
  }

  if (budget) {
    const lineText = `Anggaran milik calon pelanggan: ${budget}`;
    emailText += lineText + "\n";
    emailHtml += lineText + "<br />";
  }

  if (timeline) {
    const lineText = `Linimasa yang dibutuhkan calon pelanggan: ${timeline}`;
    emailText += lineText + "\n";
    emailHtml += lineText + "<br />";
  }

  if (referral_code) {
    const lineText = `Kode rujukan dari calon pelanggan: ${referral_code}`;
    emailText += lineText + "\n";
    emailHtml += lineText + "<br />";
  }

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM, // sender address
    to: process.env.EMAIL_TO, // list of receivers
    subject: "Someone reach us!", // Subject line
    text: emailText, // plain text body
    html: emailHtml, // html body
  });

  return info;
}

export async function contactUsAction(
  prevState: ContactUsFormState,
  formData: FormData,
): Promise<ContactUsFormState> {
  const formObject = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    company: formData.get("company"),
    interest: formData.getAll("interest"),
    budget: formData.get("budget"),
    timeline: formData.get("timeline"),
    referral_code: formData.get("referral_code"),
  };
  const validatedFields = contactUsSchema.safeParse(formObject);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      resetKey: prevState.resetKey,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const info = await contactUs(validatedFields.data);

  return {
    resetKey: info.messageId,
  };
}
