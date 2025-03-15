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

    // ✅ 4. Submit the form (no need for no-cors)
    const response = await fetch(googleFormURL, {
      method: "POST",
      body: params,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    // ✅ 5. Check for a successful submission
    if (response.ok) {
      return NextResponse.json({ message: "Form submitted successfully" });
    } else {
      console.error("❌ Failed to submit form:", response.statusText);
      return NextResponse.json({ message: "Failed to submit form", error: response.statusText }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error submitting form", error: error.message }, { status: 500 });
  }
}

// Add CORS headers to the response
export async function middleware(req) {
  const res = NextResponse.next();

  // Set CORS headers
  res.headers.set('Access-Control-Allow-Origin', '*'); // Replace '*' with specific domain if needed
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200 });
  }

  return res;
}
