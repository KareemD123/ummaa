import type { NextApiRequest, NextApiResponse } from "next";

// events data
import events from "../../utils/data/events";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // fake loading time
    setTimeout(() => {
      if (!res.headersSent) {
        res.status(200).json(events);
      }
    }, 500);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};
