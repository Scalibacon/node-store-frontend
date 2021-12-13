import styles from './Carousel.module.scss';
import { Product } from '../../pages/api/product';
import Card from '../Card';

type CarouselProps = {
  title?: string,
  products: Product[]
}

const Carousel = (props: CarouselProps) => {
  return (
    <div className={styles.container}>
      { props.title && <h2>{props.title}</h2> }
      
      
      <main>
        {/* fazer um loop sobre os props.products e adicionar components cards */}
        {
          props.products.map(product => {
            return <Card product={product} key={product.id}/>
          })
        }
      </main>
    </div>
  )
}

export default Carousel;