import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // ✅ 1. Get form data correctly
    const formData = await req.formData();
    const data: Record<string, string> = {};
    formData.forEach((value, key) => (data[key] = value.toString()));
    // ✅ 2. Check required fields
    if (!data["entry.2058220784"] || !data["entry.1693362767"]) {
      console.error("❌ Missing required fields!");
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // ✅ 3. Prepare Google Forms submission
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => params.append(key, value));

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScNJhGtcfiscV4-r553336JR8XbZgzLCnYHYuTquh0pUUEt-Q/formResponse";

    // ✅ 4. Submit Form
    await fetch(googleFormURL, {
      method: "POST",
      body: params,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      mode: "no-cors",
    });

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error submitting form", error: error.message }, { status: 500 });
  }
}
