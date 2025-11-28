// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from '@/lib/firebase/service';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: boolean;
    statusCode: Number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.product![1]){
    const data = await retrieveDataById("products", req.query.product![1]);
    res.status(200).json({status: true, statusCode: 200, data});
  }else{
  //memgirim respon status dengan data json dengan data name dan age 
//   const data = [
//   {
//     id: 1,
//     name: "Baju Baru",
//     price: 500000,
//     size: "xl",
//   },
//    {
//     id: 2,
//     name: "Baju Lama",
//     price: 100000,
//     size: "l",
//   },
// ]



const data = await retrieveData("products");

  res.status(200).json({status: true, statusCode: 200, data});
}
}
