import { NextPage } from "next";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home: NextPage = () => {
  useEffect( () => {
    async function getAllCategories(){
      const result = await fetch('/api/category');
      const categories = await result.json();

      console.log(categories);
    }

    getAllCategories();
  }, []);

  return (
    <>
      <Header/>
        <h3>Esse aqui é o mainzada</h3>
      <Footer/>
    </>    
  )
}

export default Home;