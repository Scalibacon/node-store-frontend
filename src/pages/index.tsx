import { GetServerSideProps, NextPage } from "next";
import Image from 'next/image';
import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MyCarousel from '../components/MyCarousel';
import styles from '../styles/home.module.scss';

import { Product } from './api/products';

type HomeProps = {
  productsBrabos: Product[],  
}

const Home: NextPage<HomeProps> = (props) => {
  const [productsBrabos, setProductsBrabos] = useState(props.productsBrabos);

  return (
    <div className="wrapper">
      <Header/>
      <main className={styles.main}>
        <section className={styles.bannerBox}>
          <Image
            className={styles.bannerBox}
            src='https://static.vecteezy.com/system/resources/previews/001/044/894/large_2x/summer-sale-banner-with-items-on-yellow-vector.jpg'
            width={1600}
            height={400}
            layout="responsive"
          />
        </section>        

        <section className={styles.carouselContainer}>
          <MyCarousel title="OS MAIS BRABOS" products={productsBrabos}/>
          <MyCarousel title="SÓ OS FINOS" products={productsBrabos}/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch('http://localhost:3000/api/products');
  const productsBrabos = await result.json() as Product[];
  
  return {
    props: {
      productsBrabos,
    }
  }
}

export default Home;