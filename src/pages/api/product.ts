import { NextApiRequest, NextApiResponse } from "next";

export type product = {
  id: string,
  name: string,
  price: number,
  description: string,
  pictures: string[]
}

export default function handler(request: NextApiRequest, response: NextApiResponse){
  const requestType = request.query.type;
  // futuramente fazer um switch case pra saber o critério de busca

  const mockedProducts = [
    {
      id: "1",
      name: "Produto 1",
      price: 1.99,
      description: "Um produto",
      pictures: ["path/to/image.png"]
    },
    {
      id: "2",
      name: "Produto 2",
      price: 2.99,
      description: "Outro produto",
      pictures: ["path/to/image.png"]
    },
    {
      id: "3",
      name: "Produto 3",
      price: 3.99,
      description: "Outro produto",
      pictures: ["path/to/image.png"]
    }
  ] as product[];

  return mockedProducts;
}