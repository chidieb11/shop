import React from "react";
import { useForm } from "react-hook-form";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";

const ShippingScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />

      <form className="mx-auto max">
        <h1 className="capitalize mb-5">shipping address</h1>
        <div className="mb-4 flex flex-col">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="w-96"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Please Enter Your Full Name",
            })}
            style={{ border: "1px solid #ccc", outline: "none" }}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
      </form>
    </Layout>
  );
};

export default ShippingScreen;
