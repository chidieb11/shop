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

      <form className="mx-auto max-w-screen-sm">
        <h1 className="capitalize mb-5 text-2xl font-bold font-mono">
          shipping address
        </h1>
        <div className="mb-4 flex flex-col">
          <label htmlFor="fullName" className="font-bold font-mono">
            Full Name
          </label>
          <input
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

        <div className="mb-4 flex flex-col">
          <label htmlFor="fullName" className="font-bold font-mono">
            Address
          </label>
          <input
            className="w-96"
            id="address"
            autoFocus
            {...register("address", {
              required: "Please Enter Your Address",
              minLength: {
                value: 3,
                message: "Address must be at least 3 characters long!",
              },
            })}
            style={{ border: "1px solid #ccc", outline: "none" }}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="fullName" className="font-bold font-mono">
           City
          </label>
          <input
            className="w-96"
            id="city"
            autoFocus
            {...register("city", {
              required: "Please Enter Your City",
            })}
            style={{ border: "1px solid #ccc", outline: "none" }}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="fullName" className="font-bold font-mono">
           Postal Code
          </label>
          <input
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

        <div className="mb-4 flex flex-col">
          <label htmlFor="fullName" className="font-bold font-mono">
            Full Name
          </label>
          <input
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
