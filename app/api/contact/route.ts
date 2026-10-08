import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.name = "Full name is required";
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "A valid email address is required";
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters long";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Process valid inquiry
    // In production, this can connect to email services (SendGrid/Resend) or webhook
    console.log("[INQUIRY RECEIVED]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      company: (company || "").trim(),
      email: email.trim(),
      phone: (phone || "").trim(),
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you. Your inquiry has been transmitted to JES Transportation LLC.",
    });
  } catch (error) {
    console.error("[INQUIRY ERROR]", error);
    return NextResponse.json(
      { success: false, message: "Unable to process inquiry at this moment." },
      { status: 500 }
    );
  }
}
