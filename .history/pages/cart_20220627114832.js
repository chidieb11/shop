import React from "react";
import Layout from "../components/Layout";

const CartScreen = () => {
  return (
    <Layout title="Shopping Cart">
      <h1>shopping cart</h1>
      {cartItems.length > 0 ? (
        <div>
            Cart is empty
        </div>
      ):(<div>hello</div>)}
    </Layout>
  );
};

export default CartScreen;
