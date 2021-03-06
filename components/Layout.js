import Head from "next/head";
import Link from "next/link";
import React, {useContext, useEffect, useState} from "react";
import {Store} from "../utils/Store";
import {signOut, useSession} from "next-auth/react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Menu} from "@headlessui/react";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";

const Layout = ({title, children}) => {
    const {state, dispatch} = useContext(Store);
    const {cart} = state;
    const [cartItemCount, setCartItemCount] = useState(0);
    const {status, data: session} = useSession();

    useEffect(() => {
        setCartItemCount(
            cart.cartItems.reduce(
                (accumulator, currentQuantity) =>
                    accumulator + currentQuantity.quantity,
                0
            )
        );
    }, [cart.cartItems]);

    const logoutClickHandler = () => {
        Cookies.remove("cart");
        dispatch({type: "CLEAR_RESET"});
        signOut({callbackUrl: "/login"});
    };

    return (
        <>
            <Head>
                <title>{title ? title + "-Amazonia" : "Amazonia"}</title>
                <meta name="description" content="Ecommerce Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <ToastContainer position="bottom-center" limit={1}/>

            <div className="flex min-h-screen flex-col justify-between">
                {/* Navbar */}
                <header className="top-0 sticky shadow-md z-40">
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
                                        <span
                                            className="ml-1 rounded-full bg-red-600 text-white px-2 pt-1 text-center font-bold text-xs">
                                            {cartItemCount}
                                        </span>
                                    )}
                                </a>
                            </Link>

                            {status === "loading" ? (
                                "loading"
                            ) : session?.user ? (
                                <Menu as="div" className="relative inline-block">
                                    <Menu.Button>{session.user.name}</Menu.Button>
                                    <Menu.Items
                                        className="absolute right-0 w-56 origin-top-right bg-white shadow-lg rounded-md">
                                        <Menu.Item>
                                            <DropdownLink className="dropdown-link" href="/profile">
                                                Profile
                                            </DropdownLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <DropdownLink
                                                className="dropdown-link"
                                                href="/order-history"
                                            >
                                                Order History
                                            </DropdownLink>
                                        </Menu.Item>
                                        {session.user.isAdmin && (
                                            <Menu.Item>
                                                <DropdownLink className="dropdown-link" href="/admin/dashboard">
                                                    Admin Dashboard
                                                </DropdownLink>
                                            </Menu.Item>
                                        )}
                                        <Menu.Item>
                                            <a
                                                className="dropdown-link"
                                                href="#"
                                                onClick={logoutClickHandler}
                                            >
                                                Logout
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            ) : (
                                <Link href="/login">
                                    <a className="text-xl font-mono p-2">Login</a>
                                </Link>
                            )}
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
