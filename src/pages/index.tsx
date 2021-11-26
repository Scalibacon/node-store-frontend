import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { category } from './api/category';

type HomeProps = {
  categories?: category[],  
}

const Home: NextPage<HomeProps> = (props) => {
  const [categories, setCategories] = useState(props.categories);

  return (
    <>
      <Header/>
        <h3>Esse aqui é o mainzada</h3>
        { 
          categories?.map( (category, index) => {
            return <div key={index}>{category.name}</div>
          })
        }
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