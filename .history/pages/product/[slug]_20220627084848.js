import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";

const ProductScreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Prodcut Not Found!</div>;
  }
  return (
    <div>
      <Layout title={product.name}>
        <div className=""></div>
      </Layout>
    </div>
  );
};

export default ProductScreen;
