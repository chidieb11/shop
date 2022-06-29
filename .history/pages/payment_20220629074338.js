import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import CheckoutWizard from "../components/CheckoutWizard";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error("Payment method is required!");
    }
    dispatch({ type: " SAVE_PAYMENT_METHOD", payload: selectedPaymentMethod });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    );
    router.push("/placeorder");
  };

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push("/shipping");
    }
    setSelectedPaymentMethod(paymentMethod || "");
  }, [paymentMethod, router, shippingAddress.address]);

  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form
        action=""
        className="mx-auto max-w-screen-md"
        onSubmit={submitHandler}
      >
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
            <label htmlFor={payment} className="p-2 font-mono">
              {payment}
            </label>
          </div>
        ))}
        <div className="">
          <button
            className="capitalize default-button mr-2 font-bold font-mono"
            onClick={() => router.push("/shipping")}
            type="button"
          >
            back
          </button>
          <button className="primary-button capitalize font-bold font-mono ml-0">
            next
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default PaymentScreen;
