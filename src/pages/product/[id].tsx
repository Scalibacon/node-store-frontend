import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Header from "../../components/Header";
import { Product } from '../api/products';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../../styles/product.module.scss';
import Image from "next/image";

type ProductProps = {
  product: Product
}

const Product: NextPage<ProductProps> = (props) => {
  const [product, setProduct] = useState(props.product);

  return (
    <div className={`wrapper`}>
      <Header/>
      <main className={styles.main}>
        <h2>{ product.name }</h2>
        <section className={styles.product}>
          <section className={styles.imageContainer}>
            <aside>
              { 
                product.pictures.map(pic => {
                  return (
                    <div className={styles.miniPic}>
                      <Image src={pic} width={100} height={100} />
                    </div>
                  )
                })
              }
            </aside>
            <div className={styles.image}>            
              <Image
                src={product.pictures[0]}
                width={100}
                height={100}
                layout="responsive"
              />
            </div> 
          </section>                   
        </section>
        <section className={styles.sale}>
          <h3 className={styles.estoque}>Em estoque</h3>
          <p>
              Vendido e entregue por: <b>ScaliLoja</b>
          </p>
          <p className={styles.previousPrice}>9.876,54</p>
          <h2>
            { `R$${product.price.toFixed(2).replace('.', ',')}` }
            
          </h2>
          <p>À vista no PIX ou boleto</p>
          <h6>ou em até 12x com juros absurdos no cartão</h6>
          <button type="button"><FaShoppingCart size="25"/>COMPRAR</button>
        </section>
      </main>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productId = context.params?.id;
  const result = await fetch(`http://localhost:3000/api/products/${productId}`);
  const product = await result.json() as Product;

  return {
    props: {
      product
    }
  }
}

export default Product;