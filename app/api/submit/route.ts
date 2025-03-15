import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // ✅ 1. Get form data correctly
    const formData = await req.formData();
    const data: Record<string, string> = {};
    formData.forEach((value, key) => (data[key] = value.toString()));

    // ✅ 2. Check all required fields
    const requiredFields = ['entry.2058220784', 'entry.1693362767'];
    for (let field of requiredFields) {
      if (!data[field]) {
        console.error(`❌ Missing required field: ${field}`);
        return NextResponse.json({ message: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // ✅ 3. Prepare Google Forms submission
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => params.append(key, value));

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScNJhGtcfiscV4-r553336JR8XbZgzLCnYHYuTquh0pUUEt-Q/formResponse";

    // ✅ 4. Submit the form with additional realistic headers
    const response = await fetch(googleFormURL, {
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1"
      },
    });

    // ✅ 5. Check for a successful submission
    if (response.ok) {
      return NextResponse.json({ message: "Form submitted successfully" });
    } else {
      const errorDetails = await response.text();
      console.error("❌ Failed to submit form:", errorDetails);
      return NextResponse.json({ message: "Failed to submit form", error: errorDetails }, { status: 500 });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: "Error submitting form", error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
    }
  }
}

// Add CORS headers to the response
export async function middleware(req) {
  const res = NextResponse.next();

  // Set CORS headers (can be customized to restrict to certain domains)
  res.headers.set('Access-Control-Allow-Origin', 'https://example.com'); // Set your trusted domain
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.headers.set('Access-Control-Allow-Credentials', 'true');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200 });
  }

  return res;
}
