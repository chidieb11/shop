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
        <header className="top-0 st">
          <nav className="flex justify-between shadow-md px-4 h-16">
            <Link href="/">
              <a>amazonia</a>
            </Link>
            <div>
              <Link href="/cart">cart</Link>
              <Link href="login">login</Link>
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
