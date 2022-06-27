import React from "react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <Layout title="Login">
      <form className="">
        <h1>login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email"  />
        </div>
      </form>
    </Layout>
  );
};

export default Login;
