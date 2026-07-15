import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Newsletter <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: "New Newsletter Subscriber",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>🎉 New Subscriber</h2>

          <p>
            A new user has subscribed to your newsletter.
          </p>

          <hr />

          <p>
            <strong>Email:</strong> ${email}
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Subscribed Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}