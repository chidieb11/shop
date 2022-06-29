import React from "react";
import Layout from "../components/Layout";
import CheckoutWizard from "../components/CheckoutWizard";
import useRouter from "next/router";

const PaymentScreen = () => {
  const [selectedPaymentMethod,setSelectedPaymentMethod]
  const router = useRouter();
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form action="" className="mx-auto max-w-screen-md">
        <h1 className="capitalize font-bold font-mono text-2xl">
          payment method
        </h1>
        {["Paypal", "Stripe", "CashOnDelivery"].map((payment) => (
          <div key={payment} className="">
            <input
              type="radio"
              name="paymentMethod"
              className=""
              id={payment}
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />
            <label htmlFor={payment}>{payment}</label>
          </div>
        ))}
        <div className="">
          <button
            className=""
            onClick={() => router.push("/shipping")}
            type="button"
          >
            back
          </button>
          <button className="primary-button">next</button>
        </div>
      </form>
    </Layout>
  );
};

export default PaymentScreen;