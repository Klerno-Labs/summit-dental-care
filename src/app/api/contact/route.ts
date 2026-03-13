import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real production app, you would use Nodemailer, Resend, SendGrid, etc.
    // Example console log for debugging:
    console.log("Received Contact Form Submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}