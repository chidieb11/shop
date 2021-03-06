import Cookies from "js-cookie";
import useRouter from "next/router";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

const ShippingScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter;

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );
    router.push("/payment");
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />

      <form
        className="mx-auto max-w-screen-sm"
        onSubmit={handleSubmit(submitHandler)}
      >
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
          {errors.address && (
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
          {errors.city && (
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
            {...register("postalCode", {
              required: "Please Enter Your Postal Code",
            })}
            style={{ border: "1px solid #ccc", outline: "none" }}
          />
          {errors.postalCode && (
            <div className="text-red-500">{errors.postalCode.message}</div>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="fullName" className="font-bold font-mono">
            Country
          </label>
          <input
            className="w-96"
            id="fullName"
            autoFocus
            {...register("country", {
              required: "Please Enter Your Country",
            })}
            style={{ border: "1px solid #ccc", outline: "none" }}
          />
          {errors.country && (
            <div className="text-red-500">{errors.country.message}</div>
          )}
        </div>
        <div>
          <button className="primary-button capitalize font-bold font-mono w-96">
            next
          </button>
        </div>
      </form>
    </Layout>
  );
};

ShippingScreen.auth = true;

export default ShippingScreen;
