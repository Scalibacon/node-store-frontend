export type CartItem = {
  name: string,
  quantity: number,
  price: number
}

export function getCartItens(): CartItem[]{
  const CartItens = [
    {
      name: "Carrinho de controle remoto",
      quantity: 1,
      price: 12.99
    },
    {
      name: "Engrenagem de Mecha MJT-15",
      quantity: 3,
      price: 3.99
    }
  ] as CartItem[];

  return CartItens
}