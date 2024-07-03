"use server";

import { transporter } from "@/lib/mail";

export async function sendEmail() {
  const info = await transporter.sendMail({
    from: '"Hi Hooore 👻" <support@hooore.com>', // sender address
    to: "engineering@hooore.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}
