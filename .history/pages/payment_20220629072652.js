import React, { useState } from "react";
import Layout from "../components/Layout";
import CheckoutWizard from "../components/CheckoutWizard";
import { useRouter } from "next/router";

const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const router = useRouter();
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form action="" className="mx-auto max-w-screen-md">
        <h1 className="capitalize font-bold font-mono text-2xl mb-4">
          payment method
        </h1>
        {["Paypal", "Stripe", "CashOnDelivery"].map((payment) => (
          <div key={payment} className="">
            <input
              type="radio"
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />
            <label htmlFor={payment} className="p-2">
              {payment}
            </label>
          </div>
        ))}
        <div className="">
          <button
            className="capitalize default-button mr-2"
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
