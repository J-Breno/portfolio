import { NextResponse } from "next/server";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Chave RESEND_API_KEY não definida");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, message } = body;

    await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "joao.breno85@hotmail.com",
      subject: `Nova mensagem de ${name}`,
      text: `
        Nome: ${name}
        Telefone: ${phone}
        Email: ${email}

        Mensagem:
        ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
