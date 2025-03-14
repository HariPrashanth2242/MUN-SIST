import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    // Parse form-data correctly
    const formData = await req.formData();

    // Convert form-data into a key-value object
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });


    // Check for required fields
    if (!data["entry.2058220784"] || !data["entry.1693362767"]) {
      console.error("\x1b[31m❌ Missing required fields!\x1b[0m");
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare URL-encoded data for Google Forms
    const params = new URLSearchParams(data);

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScNJhGtcfiscV4-r553336JR8XbZgzLCnYHYuTquh0pUUEt-Q/formResponse";


    const response = await fetch(googleFormURL, {
      method: "POST",
      body: params.toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!response.ok) {
      console.error("\x1b[31m❌ Google Form Submission Failed!\x1b[0m");
      return NextResponse.json(
        { message: "Failed to submit form" },
        { status: response.status }
      );
    }
    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("\x1b[31m❌ Server Error:", error.message, "\x1b[0m");
    return NextResponse.json(
      { message: "Error submitting form", error: error.message },
      { status: 500 }
    );
  }
}