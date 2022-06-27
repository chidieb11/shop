import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl capitalize">login</h1>
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="mb-2 font-bold font-mono">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Please Enter an Email!",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please Enter a Valid Email!",
              },
            })}
            className="w-96 border-b"
            id="email"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="password" className="mb-2 font-bold font-mono">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Please Enter a Password!",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long!",
              },
            })}
            className="w-96 border-b"
            id="password"
            autoFocus
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button">Login</button>
        </div>

        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
