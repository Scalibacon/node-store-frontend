import { GetServerSideProps, NextPage } from "next";
import Image from 'next/image';
import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MyCarousel from '../components/MyCarousel';
import styles from '../styles/home.module.scss';

import { Product } from './api/product';

type HomeProps = {
  products: Product[],  
}

const Home: NextPage<HomeProps> = (props) => {
  const [products, setProducts] = useState(props.products);

  return (
    <div className={styles.wrapper}>
      <Header/>
      <main className={styles.main}>
        <section className={styles.bannerBox}>
          <Image
            className={styles.bannerBox}
            src='https://s3.amazonaws.com/thumbnails.venngage.com/template/d7d15979-1688-4fc8-ae2d-b7857aee4ca0.png'
            width={1260}
            height={252}
            layout="responsive"
          />
        </section>
        

        <section className={styles.carouselContainer}>
          <MyCarousel title="OS MAIS BRABOS" products={products}/>
          <MyCarousel title="SÓ OS FINOS" products={products}/>
        </section>
      </main>
      {/* <a href="https://www.freepik.com/psd/banner">Banner psd created by ranilson-arruda - www.freepik.com</a> */}
      <Footer/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch('http://localhost:3000/api/product');
  const products = await result.json() as Product[];
  
  return {
    props: {
      products,
    }
  }
}

export default Home;