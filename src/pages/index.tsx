import { GetServerSideProps, NextPage } from "next";
import Image  from 'next/image';
import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from '../styles/home.module.css';

import { category } from './api/category';

type HomeProps = {
  categories?: category[],  
}

const Home: NextPage<HomeProps> = (props) => {
  const [categories, setCategories] = useState(props.categories);

  return (
    <>
      <Header/>
        <main className={styles.main}>
          <section className={styles.bannerBox}>
            Imagine um banner irado com umas promoções só de zoas...
          </section>
        </main>
        {/* <a href="https://www.freepik.com/psd/banner">Banner psd created by ranilson-arruda - www.freepik.com</a> */}
      <Footer/>
    </>    
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch('http://localhost:3000/api/category');
  const categories = await result.json();
  
  return {
    props: {
      categories,
    }
  }
}

export default Home;