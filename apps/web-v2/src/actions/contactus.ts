"use server";

import { transporter } from "@/lib/mail";
import { z } from "zod";

const contactUsSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character.",
  }),
  email: z.string().min(1, {
    message: "Email must be at least 1 character.",
  }),
  company: z.string(),
  interest: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one interest.",
  }),
  budget: z.enum(
    ["< 5.000", "5.000 - 10.000", "10.000 - 30.000", "> 30.000 "],
    {
      required_error: "You need to select a project budget type.",
    },
  ),
  timeline: z.enum(["1 Month", "3 Months", "6 Months", "Tentative"], {
    required_error: "You need to select a project budget type.",
  }),
  referral_code: z.string(),
});

export async function contactUs(_: unknown, formData: FormData) {
  const formObject = {
    name: formData.get("name"),
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
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, company, interest, budget, timeline, referral_code } =
    validatedFields.data;

  let emailText = "";
  let emailHtml = "";

  if (name) {
    const lineText = `Nama calon pelanggan: ${name}`;
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

  console.log("Message sent: %s", info.messageId);
}
