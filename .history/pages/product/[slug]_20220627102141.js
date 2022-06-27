import React, { useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Link from "next/link";
import Image from "next/image";

const ProductScreen = () => {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Prodcut Not Found!</div>;
  }

  const handleAddToCart = () => {
    const existingItem = state.cart.cartItems.find(
      (x) => x.slug === product.slug
    );
    const quantity = existingItem ? existingItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
        alert("Sorry product is out of Stock");
         return;}
    }
    dispatch({type:''})
  };
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
              <li>
                {product.rating} of {product.numReviews} reviews
              </li>
              <li>Description: {product.description}</li>
            </ul>
          </div>

          <div className="card p-5 h-40">
            <div className="mb-2 flex justify-between">
              <div className="font-bold">Price</div>
              <div className="font-mono">${product.price}</div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="font-bold">Status</div>
              <div className="font-mono">
                {product.countInStock > 0 ? "In Stock" : "Unavailable"}
              </div>
            </div>
            <button
              className="w-full primary-button capitalize"
              onClick={handleAddToCart}
            >
              add to cart
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductScreen;
