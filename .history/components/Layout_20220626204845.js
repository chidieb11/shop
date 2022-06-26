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
          <nav className="flex justify-between items-center px-4 sm:mx-40 w-fu h-16">
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
                <a className="text-xl font-mono p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main className="container mx-40 mt-4 px-4">{children}</main>

        {/* Footer */}
        <footer className="flex justify-center items-center shadow-inner h-12">
          <p>Copyright @ 2022 Amazonia</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
