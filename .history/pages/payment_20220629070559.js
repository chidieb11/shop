import React from "react";
import Layout from "../components/Layout";
import CheckoutWizard from "../components/CheckoutWizard";

const PaymentScreen = () => {
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form action="" className="mx-auto max-w-screen-md">
        <h1 className="capitalize font-bold font-mono ">payment method</h1>
      </form>
    </Layout>
  );
};

export default PaymentScreen;
