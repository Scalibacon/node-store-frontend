import type { NextApiRequest, NextApiResponse } from 'next';

export type Category = {
  id: number,
  name: string;
}

export default function handler(request: NextApiRequest, response: NextApiResponse){
  console.log(request.body)

  // futuramente vai buscar na API
  const categories = [
    {id: 1, name: 'Alimentos'},
    {id: 2, name: 'Eletrodomésticos'},
    {id: 3, name: 'Informática'},
    {id: 4, name: 'Eletrônicos'},
    {id: 5, name: 'Vestuário'},
    {id: 6, name: 'Infantil'},
    {id: 7, name: 'Artigos de Decoração de Lares'},
  ] as Category[];

  return response.status(200).json(categories);
}