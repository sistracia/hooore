import { transporter } from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body) {
    return new Response(JSON.stringify({ message: "Body required!" }), {
      status: 422,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
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
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function OPTIONS() {
  return new Response("", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
