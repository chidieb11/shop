import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";

const ShippingScreen = () => {
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />

      <form c></form>
    </Layout>
  );
};

export default ShippingScreen;
