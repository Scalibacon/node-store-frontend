import Image from 'next/image';

import styles from './Card.module.scss';
import { Product } from '../../pages/api/product';
import { FiShoppingCart } from 'react-icons/fi';

type CardProps = {
  product: Product
}

const Card = ({ product }: CardProps) => {
  return (
    <div className={styles.card}>
      <header>
        <span className={styles.tag}>+ vendidos</span>
      </header>
      <section className={styles.imageContainer}>
        <Image
          src={ product.pictures[0] }
          width={700}
          height={700}
          layout="responsive"
        />
      </section>
      
      <p>{ product.name }</p>
      <div>
        <span className={styles.previousPrice}>de R$9.876,54</span>
        <span>{ `R$${product.price.toFixed(2).replace('.', ',')}` }</span>
      </div>
      <button type="button"><FiShoppingCart size="16"/>COMPRAR</button>
    </div>
  )
}

export default Card;