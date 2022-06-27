import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
const 

const CartScreen = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout title="Shopping Cart">
      <h1>shopping cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Continue Shopping</Link>
        </div>
      ) : (
        <div>hello</div>
      )}
    </Layout>
  );
};

export default CartScreen;
