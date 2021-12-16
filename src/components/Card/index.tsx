import Image from 'next/image';

import styles from './Card.module.scss';
import { Product } from '../../pages/api/products';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

type CardProps = {
  product: Product
}

const Card = ({ product }: CardProps) => {
  return (
    <Link href={ `/product/${product.id}` }>
      <a className={styles.card}>
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
        <button type="button"><FaShoppingCart size="16"/>COMPRAR</button>
      </a>
    </Link>    
  )
}

export default Card;