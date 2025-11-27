// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  age: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //memgirim respon status dengan data json dengan data name dan age 
  res.status(200).json({ name: 'Aprillia', age: 23})
}
