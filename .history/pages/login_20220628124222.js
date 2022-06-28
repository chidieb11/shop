import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { signIn,useSession } from "next-auth/react";
import { getError } from "../utils/error";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: session } = useSession();

  const submitHandler = ({ email, password }) => {
    try {
      const result = signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-5 text-2xl capitalize font-bold font-mono">
          login here
        </h1>
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
          <button className="primary-button w-96 font-bold font-mono">
            Login
          </button>
        </div>

        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href="register">
            <span className="font-bold font-mono border-b cursor-pointer">
              Register
            </span>
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
