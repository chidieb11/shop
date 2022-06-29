import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Unauthorized = () => {
  const router = useRouter();
  const { message } = router.query;
  return <Layout title="Unauthorized Page"><h1>Access Den</h1></Layout>;
};

export default Unauthorized;
