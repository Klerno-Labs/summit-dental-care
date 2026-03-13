import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check honeypot
    if (body._gotcha) {
      // Silently succeed to fool bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // In a real app, you would send an email here using Nodemailer, Resend, SendGrid, etc.
    // For this demo, we simulate a successful send after a short delay.
    // await sendEmail(body);

    console.log("Form submission received:", body);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}