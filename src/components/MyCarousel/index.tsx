import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './Carousel.module.scss';
import Arrow from './Arrow';
import { Product } from '../../pages/api/product';
import Card from '../Card';

type CarouselProps = {
  title?: string,
  products: Product[]
}

const MyCarousel = (props: CarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1150 },
      items: 5,
      paritialVisibilityGutter: 5
    },
    tablet: {
      breakpoint: { max: 1150, min: 925 },
      items: 4,
      paritialVisibilityGutter: 5
    },
    mobile: {
      breakpoint: { max: 925, min: 0 },
      items: 3,
      paritialVisibilityGutter: 5
    }
  };

  return (
    <div className={styles.container}>
      { props.title && <h2>{props.title }</h2> }      
      
      <main>
        <Carousel 
          responsive={responsive} 
          partialVisible={true} 
          customRightArrow={ <Arrow isTheLeftArrow={false}/> }
          customLeftArrow={ <Arrow isTheLeftArrow={true}/> }
        >
          {
            props.products.map(product => {
              return <Card product={product} key={product.id}/>
            })
          }
        </Carousel>
      </main>      
    </div>
  )
}

export default MyCarousel;