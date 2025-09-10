import type { NextApiRequest, NextApiResponse } from "next";

interface AcademicEntry {
  graduationYear: string;
  campus: string;
  faculty: string;
  otherFaculty?: string;
  program: string;
}

interface MembershipFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  academicEntries: AcademicEntry[];
  currentCity: string;
  currentCountry: string;
  profession: string;
  company: string;
  linkedinProfile: string;
  interests: string[];
  hearAboutUs: string;
  additionalComments: string;
  includeInDirectory: boolean;
  friendReferrals: string[];
  favoriteMemory: string;
  agreeToTerms: boolean;
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

    // Log the received data for debugging
    console.log("Received form data:", JSON.stringify(formData, null, 2));

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "currentCity",
      "currentCountry",
      "hearAboutUs",
    ];

    for (const field of requiredFields) {
      const value = formData[field as keyof MembershipFormData];
      if (!value || value.toString().trim() === "") {
        console.log(`Validation failed for field: ${field}, value:`, value);
        return res.status(400).json({
          success: false,
          message: `${field} is required`,
        });
      }
    }

    // Validate academic entries
    if (
      !formData.academicEntries ||
      !Array.isArray(formData.academicEntries) ||
      formData.academicEntries.length === 0
    ) {
      console.log(
        "Academic entries validation failed:",
        formData.academicEntries,
      );
      return res.status(400).json({
        success: false,
        message: "At least one academic entry is required",
      });
    }

    // Validate each academic entry
    for (let i = 0; i < formData.academicEntries.length; i++) {
      const entry = formData.academicEntries[i];
      const requiredAcademicFields = [
        "graduationYear",
        "campus",
        "faculty",
        "program",
      ];

      for (const field of requiredAcademicFields) {
        if (
          !entry[field as keyof AcademicEntry] ||
          entry[field as keyof AcademicEntry]?.toString().trim() === ""
        ) {
          console.log(
            `Academic entry ${i + 1} validation failed for field: ${field}`,
          );
          return res.status(400).json({
            success: false,
            message: `Academic entry ${i + 1}: ${field} is required`,
          });
        }
      }

      // If faculty is "Other", otherFaculty is required
      if (
        entry.faculty === "Other" &&
        (!entry.otherFaculty || entry.otherFaculty.trim() === "")
      ) {
        console.log(
          `Academic entry ${i + 1} validation failed: otherFaculty required when faculty is Other`,
        );
        return res.status(400).json({
          success: false,
          message: `Academic entry ${i + 1}: Please specify the faculty when selecting "Other"`,
        });
      }
    }

    // Validate terms agreement
    if (!formData.agreeToTerms) {
      console.log("Terms agreement validation failed:", formData.agreeToTerms);
      return res.status(400).json({
        success: false,
        message: "You must agree to the terms and conditions",
      });
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
    console.log("Submitting to Google Apps Script:", GOOGLE_SCRIPT_URL);
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("Google Apps Script response status:", response.status);

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
