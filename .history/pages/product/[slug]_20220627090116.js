import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Link from "next/link";
import Image from "next/image";

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
        <div className="grid md:grid-cols-4 md:gap-3">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div>
            <ul>
              <li>
                <h1 className="text-lg">{product.name}</h1>
              </li>
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>{product.rating} of {product.numReviews</li>
            </ul>
          </div>
          <div>cart</div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductScreen;