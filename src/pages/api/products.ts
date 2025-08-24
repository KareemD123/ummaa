import type { NextApiRequest, NextApiResponse } from "next";

// member data
import members from "../../utils/data/members";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // fake loading time
    setTimeout(() => {
      if (!res.headersSent) {
        res.status(200).json(members);
      }
    }, 800);
  } catch {
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};
