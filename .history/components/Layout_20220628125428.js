import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import {useSession}='next'

const Layout = ({ title, children }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemCount, setCartItemCount] = useState(0);
  const {status,data:session}=useSession();

  useEffect(() => {
    setCartItemCount(
      cart.cartItems.reduce(
        (accumulator, currentQuantity) =>
          accumulator + currentQuantity.quantity,
        0
      )
    );
  }, [cart.cartItems]);

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
          <nav className="flex justify-between items-center px-4 md:mx-40 h-16">
            <Link href="/">
              <a className="text-2xl font-bold font-mono capitalize">
                amazonia
              </a>
            </Link>
            <div>
              <Link href="cart">
                <a className="p-2 capitalize text-xl font-mono">
                  cart
                  {cartItemCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 text-white px-2 pt-1 text-center font-bold text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="login">
                <a className="text-xl font-mono p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main className="container m-auto mx-40 mt-4 px-4">{children}</main>

        {/* Footer */}
        <footer className="flex justify-center items-center shadow-inner h-12">
          <p>Copyright &copy; 2022 Amazonia</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
