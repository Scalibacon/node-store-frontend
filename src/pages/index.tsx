import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from '../components/Carousel';
import styles from '../styles/home.module.css';

import { Product } from './api/product';

type HomeProps = {
  products: Product[],  
}

const Home: NextPage<HomeProps> = (props) => {
  const [products, setProducts] = useState(props.products);

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <section className={styles.bannerBox}>
          Imagine um banner irado com umas promoções só de zoas...
        </section>

        <section className={styles.carouselContainer}>
          <Carousel title="OS MAIS BRABOS" products={products}/>
        </section>
      </main>
      {/* <a href="https://www.freepik.com/psd/banner">Banner psd created by ranilson-arruda - www.freepik.com</a> */}
      <Footer/>
    </>    
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