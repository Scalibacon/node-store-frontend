import styles from './Carousel.module.scss';
import { product } from '../../pages/api/product';

type CarouselProps = {
  title: string,
  products: product[]
}

const Carousel = (props: CarouselProps) => {
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>
      <main>
        {/* fazer um loop sobre os props.products e adicionar components cards */}
      </main>
    </div>
  )
}

export default Carousel;