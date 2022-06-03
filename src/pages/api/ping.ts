import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message: string
}

const supportedMethods = ["GET"]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.method || supportedMethods.indexOf(req.method) === -1) {
    res.status(400).json({ message: "Method not supported" })
  }

  res.status(200).json({ message: "Pong" })
}
