import React from "react";
import Layout from "../components/Layout";
import CheckoutWizard from "../components/CheckoutWizard";

const PaymentScreen = () => {
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form action="">
        <h1 className=""></h1>
      </form>
    </Layout>
  );
};

export default PaymentScreen;