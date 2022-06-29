import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";

const ShippingScreen = () => {
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />

      <form className="">
        <h1>shipping addre</h1>
      </form>
    </Layout>
  );
};

export default ShippingScreen;
