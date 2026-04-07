// app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESENDER_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { from_name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Masih <onboarding@resend.dev>", // verified sender
      to: ["masihmuhammadi202@gmail.com"], // your Gmail
      subject: `New message from ${from_name}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${from_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as any).message },
      { status: 500 },
    );
  }
}
