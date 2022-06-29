import React from "react";
import Layout from "../components/Layout";
import CheckoutWizard from "../components/CheckoutWizard";

const PaymentScreen = () => {
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form action="" className="mx-auto max-w-screen-md">
        <h1 className="capitalize font-bold font-mono text-2xl">
          payment method
        </h1>
        {["Paypal", "Stripe", "CashOnDelivery"].map(payment)=>(
          
        )}
      </form>
    </Layout>
  );
};

export default PaymentScreen;
