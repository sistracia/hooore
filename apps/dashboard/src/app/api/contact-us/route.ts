import { transporter } from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body) {
    return new Response(JSON.stringify({ message: "Body required!" }), {
      status: 422,
    });
  }

  const { emailText, emailHtml } = body;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM, // sender address
    to: process.env.EMAIL_TO, // list of receivers
    subject: "Someone reach us!", // Subject line
    text: emailText, // plain text body
    html: emailHtml, // html body
  });

  return new Response(JSON.stringify({ message: "Success." }), {
    status: 200,
  });
}
