import Image from 'next/image';

import styles from './Card.module.scss';
import { Product } from '../../pages/api/product';

type CardProps = {
  product: Product
}

const Card = ({ product }: CardProps) => {
  return (
    <div className={styles.card}>
      <header></header>
      <section className={styles.imageContainer}>
        <Image
          src={ product.pictures[0] }
          width={420}
          height={420}
          layout="responsive"
        />
      </section>
      
      <p>{ product.name }</p>
      <div>{ product.price }</div>
    </div>
  )
}

export default Card;