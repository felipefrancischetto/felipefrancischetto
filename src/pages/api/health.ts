import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  health: string
}

const health = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    res.status(200).json({ health: 'ok' });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default health
