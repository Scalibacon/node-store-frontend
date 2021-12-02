import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";

import { CartItem, getCartItens } from '../../pages/api/cart';
import styles from './Cart.module.scss';

type CartProps = {
  color?: string,
  size?: string
}

export const Cart = ({
  color = "white",
  size = "16"
}: CartProps) => {
  const [cartItens, setCartItens] = useState<CartItem[]>([]);

  useEffect( () => {
    setCartItens(getCartItens());
  }, []);

  return (
    <span className={styles.cart}>
      <FiShoppingCart color={color} size={size}/>
      <div>{cartItens.length}</div>
    </span>
  )
}