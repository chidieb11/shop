import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const CartScreen = () => {
    const {cart:{cartItems}}
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
