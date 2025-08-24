import type { NextApiRequest, NextApiResponse } from "next";

// Member authentication - In production, this should use a proper database and password hashing
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Demo credentials for development - MUST be replaced with proper authentication
  const demoCredentials = {
    email: process.env.DEMO_ADMIN_EMAIL || "admin@utmaa.org",
    password: process.env.DEMO_ADMIN_PASSWORD || "utmaa2024",
  };

  if (
    email === demoCredentials.email &&
    password === demoCredentials.password
  ) {
    // In production, generate a proper JWT token here
    res.status(200).json({
      status: true,
      message: "Login successful",
      user: { email, role: "admin" },
    });
  } else {
    res.status(401).json({
      status: false,
      error: "Invalid credentials",
    });
  }
};
