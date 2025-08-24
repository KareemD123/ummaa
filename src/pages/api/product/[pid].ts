import type { NextApiRequest, NextApiResponse } from "next";

// member data
import members from "../../../utils/data/members";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { pid } = req.query;

    if (!pid || typeof pid !== 'string') {
      return res.status(400).json({ error: 'Invalid member ID' });
    }

    const member = members.find((x) => x.id === pid);
    
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    return res.status(200).json(member);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
