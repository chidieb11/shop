import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";

const ShippingScreen = () => {
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />

      <form className="">
        <h1>shipping address</h1>
        <div className="">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className=""
            id="fullName"
            autoFocus
            {...register('fullName',{required})
            style={{ border: "1px solid #ccc" }}
          />
        </div>
      </form>
    </Layout>
  );
};

export default ShippingScreen;