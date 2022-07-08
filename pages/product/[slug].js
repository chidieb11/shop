import React, { useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { Store } from "../../utils/Store";
import axios from "axios";
import db from "../../utils/db";
import Products from "../../models/Products";

const ProductScreen = (props) => {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Product Not Found">Product Not Found!</Layout>;
  }

  const handleAddToCart = async () => {
    const existingItem = state.cart.cartItems.find(
      (x) => x.slug === product.slug
    );
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      alert("Sorry product is out of Stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
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

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Products.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}

export default ProductScreen;
