import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, room, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and project notes are required fields." },
        { status: 400 }
      );
    }

    // Log in production/serverless logs
    console.log(`[Next.js Serverless Contact Submission]`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Room: ${room || "Not specified"}`);
    console.log(`Message: ${message}`);
    console.log(`-----------------------------------`);

    return NextResponse.json({
      success: true,
      message: "Thanks! Your style request has been received by our consultants.",
    });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { success: false, message: "Server encountered an error processing request." },
      { status: 500 }
    );
  }
}
