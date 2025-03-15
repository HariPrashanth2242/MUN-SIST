import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("📌 Incoming request...");

    // ✅ Allow cross-origin requests from your domain
    const allowedOrigins = ['https://www.sistmun.com', 'https://yourdomain.com'];
    const origin = req.headers.get('origin');
    const response = NextResponse.next();

    if (allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'POST');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    }

    // ✅ Get form data correctly
    const formData = await req.formData();
    const data: Record<string, string> = {};
    formData.forEach((value, key) => (data[key] = value.toString()));

    console.log("📌 Form data received:", data);

    // ✅ Check required fields
    if (!data["entry.2058220784"] || !data["entry.1693362767"]) {
      console.error("❌ Missing required fields!");
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // ✅ Prepare Google Forms submission
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => params.append(key, value));

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScNJhGtcfiscV4-r553336JR8XbZgzLCnYHYuTquh0pUUEt-Q/formResponse";

    console.log("📌 Sending request to Google Forms...");

    // ✅ Submit the form with "no-cors" mode
    const formResponse = await fetch(googleFormURL, {
      method: "POST",
      body: params,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      mode: "no-cors",  // ✅ Required for Google Forms to work
    });

    console.log("📌 Google Form submission request sent!");

    // Since "no-cors" prevents response validation, assume success
    return NextResponse.json({ message: "Form submitted successfully" });

  } catch (error) {
    console.error("❌ Error submitting form:", error.message);
    return NextResponse.json({ message: "Error submitting form", error: error.message }, { status: 500 });
  }
}