import { NextApiRequest, NextApiResponse } from "next";
import { mockedProducts } from "./";

export default function handler(request: NextApiRequest, response: NextApiResponse){
  if(request.method === 'GET'){
    const id = request.query.id as string;
    const product = mockedProducts[parseInt(id)];
  
    return response.json(product);
  }  
}