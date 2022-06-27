import React from "react";
import Layout from "../../components/Layout";
import data from '../../data/products.json';..

const ProductScreen = () => {
    const product = data.
  return <div>
    <Layout title={product.name}></Layout>   
  </div>;
};

export default ProductScreen;
