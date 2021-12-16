import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Header from "../../components/Header";
import { Product } from '../api/products';

type ProductProps = {
  product: Product
}

const Product: NextPage<ProductProps> = (props) => {
  const [product, setProduct] = useState(props.product);

  return (
    <div className="wrapper">
      <Header/>
      { product.name }
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