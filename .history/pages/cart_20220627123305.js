import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { XCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const CartScreen = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout title="Shopping Cart">
      <h1 className="capitalize mb-4 text-xl font-bold">shopping cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-2">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="capitalize p-0 text-left">item</th>
                  <th className="capitalize p-5 text-right">quantity</th>
                  <th className="capitalize p-5 text-right">price</th>
                  <th className="capitalize p-5">action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <a>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            objectFit="cover"
                          />
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text">{item.quantity}</td>
                    <td className="p-5 text">{item.price}</td>
                    <td>
                      <button>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <ul>
              <li>
                <div>
                  Subtotal(
                  {cartItems.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.quantity,
                    0
                  )}
                  ):$
                  {cartItems.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.quantity * currentValue.price,
                    0
                  )}
                </div>
              </li>
              <li>
                <button
                  className="capitalize w-full primary-button font-bold font-mono"
                  onClick={() => router.push("/shipping")}
                >
                  check out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CartScreen;
