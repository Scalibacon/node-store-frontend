import { NextApiRequest, NextApiResponse } from "next";

export type Product = {
  id: string,
  name: string,
  price: number,
  description?: string,
  pictures: string[]
}

export let mockedProducts: Product[] = [];

for(let i = 0; i < 7; i++){
  mockedProducts.push({
    id: i.toString(),
    name: `Produto ${i} Brabíssimo Gerado Num Loop Mockadinho Pra Facilitar Minha Vida`,
    price: 1399 + i * 100,
    description: 'Uma descrição',
    pictures: ['https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/la-br/PICHAU%20GAMER%201060.png']
  } as Product);
}

export default function handler(request: NextApiRequest, response: NextApiResponse){
  const requestType = request.query.type;
  // futuramente fazer um switch case pra saber o critério de busca
  
  return response.status(200).json(mockedProducts);
}