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
      <form className="" onSubmit={handleSubmit(submitHandler)}>
        <h1>login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please Enter an Email!",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please Enter a Valid Email!",
              },
            })}
            className=""
            id="email"
            autoFocus
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Please Enter a Password!",
              minLength: {value:6,},
            })}
            className=""
            id="password"
            autoFocus
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
      </form>
    </Layout>
  );
};

export default Login;
