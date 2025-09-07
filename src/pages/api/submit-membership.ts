import type { NextApiRequest, NextApiResponse } from "next";

interface MembershipFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  graduationYear: string;
  faculty: string;
  program: string;
  currentCity: string;
  currentCountry: string;
  profession: string;
  company: string;
  linkedinProfile: string;
  interests: string[];
  volunteerInterest: string;
  hearAboutUs: string;
  additionalComments: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // Get the Google Apps Script URL from server-side environment variable
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL environment variable is not set");
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    // Validate required fields
    const formData: MembershipFormData = req.body;
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "graduationYear",
      "faculty",
      "program",
      "currentCity",
      "currentCountry",
      "hearAboutUs",
    ];

    for (const field of requiredFields) {
      const value = formData[field as keyof MembershipFormData];
      if (!value || value.toString().trim() === "") {
        return res.status(400).json({
          success: false,
          message: `${field} is required`,
        });
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Submit to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Check if response is ok
    if (!response.ok) {
      console.error(
        "Google Apps Script HTTP error:",
        response.status,
        response.statusText,
      );
      return res.status(500).json({
        success: false,
        message: "Failed to submit to Google Apps Script",
      });
    }

    // Check content type before parsing JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await response.text();
      console.error(
        "Google Apps Script returned non-JSON response:",
        textResponse,
      );

      // If it's HTML, it's likely an error page
      if (
        textResponse.includes("<!DOCTYPE") ||
        textResponse.includes("<html")
      ) {
        return res.status(500).json({
          success: false,
          message:
            "Google Apps Script configuration error. Please check your deployment settings.",
        });
      }

      return res.status(500).json({
        success: false,
        message: "Invalid response from Google Apps Script",
      });
    }

    let result;
    try {
      result = await response.json();
    } catch (parseError) {
      console.error("Failed to parse Google Apps Script response:", parseError);
      return res.status(500).json({
        success: false,
        message: "Invalid JSON response from Google Apps Script",
      });
    }

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: "Application submitted successfully!",
      });
    } else {
      console.error("Google Apps Script error:", result);
      return res.status(500).json({
        success: false,
        message: result.message || "Error submitting application",
      });
    }
  } catch (error) {
    console.error("API route error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
