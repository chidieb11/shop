import React from "react";
import Layout from "../../components/Layout";
import data from '../../utils/data'

const ProductScreen = () => {
    const product = data.products.find
  return <div>
    <Layout title={product.name}></Layout>   
  </div>;
};

export default ProductScreen;
