import type { NextApiRequest, NextApiResponse } from "next";

interface ContactFormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, inquiryType, message }: ContactFormData = req.body;

  // Validate required fields
  if (!name || !email || !inquiryType || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Replace this URL with your Google Apps Script web app URL
    const googleScriptUrl = process.env.GOOGLE_EMAIL_SCRIPT_URL || "URL";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        inquiryType,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Google Script responded with status: ${response.status}`,
      );
    }

    const result = await response.json();

    if (result.error) {
      throw new Error(result.error);
    }

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
