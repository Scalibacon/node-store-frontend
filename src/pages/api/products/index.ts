import { NextApiRequest, NextApiResponse } from "next";

export type Product = {
  id: string,
  name: string,
  price: number,
  description?: string,
  pictures: string[]
}

export const mockedProducts = [
  {
    id: "0",
    name: "Produto 1",
    price: 1.99,
    description: "Um produto",
    pictures: ["https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/la-br/PICHAU%20GAMER%201060.png"]
  },
  {
    id: "1",
    name: "Produto 2 Com um Título Um Pouco Maior Vendo Se Chega a 3 Linhas Pro Ellipsis Funcionar",
    price: 2.99,
    description: "Outro produto",
    pictures: ["https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/la-br/PICHAU%20GAMER%201060.png"]
  },
  {
    id: "2",
    name: "Pente Fino Esfarrapado Modelo SK3 Ciano",
    price: 3.99,
    description: "Outro produto",
    pictures: ["https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/la-br/PICHAU%20GAMER%201060.png"]
  },
  {
    id: "3",
    name: "Pente Fino Esfarrapado Modelo SK4 Ciano",
    price: 4.99,
    description: "Outro produto",
    pictures: ["https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/la-br/PICHAU%20GAMER%201060.png"]
  },
  {
    id: "4",
    name: "Pente Fino Esfarrapado Modelo SK5 Ciano",
    price: 5.99,
    description: "Outro produto",
    pictures: ["https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/la-br/PICHAU%20GAMER%201060.png"]
  },
  {
    id: "5",
    name: "Pente Fino Esfarrapado Modelo SK6 Ciano",
    price: 6.99,
    description: "Outro produto",
    pictures: ["https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/la-br/PICHAU%20GAMER%201060.png"]
  },
  {
    id: "6",
    name: "Pente Fino Esfarrapado Modelo SK7 Ciano",
    price: 7.99,
    description: "Outro produto",
    pictures: ["https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/la-br/PICHAU%20GAMER%201060.png"]
  },
] as Product[];

export default function handler(request: NextApiRequest, response: NextApiResponse){
  const requestType = request.query.type;
  // futuramente fazer um switch case pra saber o critério de busca
  
  return response.status(200).json(mockedProducts);
}