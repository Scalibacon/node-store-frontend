// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Pode servir pra mascarar a URL externa e/ou variáveis de ambiente

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Tetheus esteve aqui' })
}
