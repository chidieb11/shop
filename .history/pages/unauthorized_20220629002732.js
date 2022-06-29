import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Unauthorized = () => {
  const router = useRouter();
  const { message } = router.query;
  return (
    <Layout title="Unauthorized Page">
      <h1 className="text-xl">Access Denied!</h1>
      {message && <div className="">{message}</div>}
    </Layout>
  );
};

export default Unauthorized;
