import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-Amazonia" : "Amazonia"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        {/* Navbar */}
        <header className="top-0 sticky shadow-md">
          <nav className="flex justify-between items-center px-4 mx-40 h-16">
            <Link href="/">
              <a className="text-2xl font-bold font-mono capitalize">
                amazonia
              </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2 capitalize text-xl font-mono">cart</a>
              </Link>
              <Link href="login">
                <a className="text-xl font-mono capitalize p-2">login</a>
              </Link>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
