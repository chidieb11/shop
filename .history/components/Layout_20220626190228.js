import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{Amazonia}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
