import React from "react";
import Layout from "../components/Layout";

const CartScreen = () => {
  return (
    <Layout title="Shopping Cart">
      <h1>shopping cart</h1>
      {cartItems}
    </Layout>
  );
};

export default CartScreen;
