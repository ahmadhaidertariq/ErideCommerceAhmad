import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, brandName, monthlyRevenue, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // If Resend API key is not set, return success (for development)
    // Configure RESEND_API_KEY in Vercel for production
    if (!process.env.RESEND_API_KEY) {
      console.log("Contact form submission:", { name, email, brandName, monthlyRevenue, message });
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "ErideCommerce <onboarding@resend.dev>",
      to: "info@eridecommerce.com",
      replyTo: email,
      subject: `New Contact: ${brandName || "No brand"} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Brand Name:</strong> ${brandName || "Not provided"}</p>
        <p><strong>Monthly Revenue:</strong> ${monthlyRevenue || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
