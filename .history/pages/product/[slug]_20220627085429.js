import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Link from "next/link";

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
        <div className="py-2">
          <Link href="/">Back to products page</Link>
        </div>
        <div className="grid md:grid-cols-4">
          <div>image</div>
          <div>desc</div>
          <div>cart</div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductScreen;
