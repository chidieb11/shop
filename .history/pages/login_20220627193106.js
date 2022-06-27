import React from "react";
import Layout from "../components/Layout";
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const Login = () => {
  return (
    <Layout title="Login">
      <form className="">
        <h1>login</h1>
        <div>
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
        </div>
      </form>
    </Layout>
  );
};

export default Login;
