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

  const handleRemoveItem = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

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
              <thead className="border-b">
                <tr>
                  <th className="capitalize p-5 text-left">item</th>
                  <th className="capitalize p-3 text-right">quantity</th>
                  <th className="capitalize p-3 text-right">price</th>
                  <th className="capitalize p-3">action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td className="">
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
                    {/* <td className="p-3 text-right">{item.quantity}</td> */}
                    <td className="p-3 text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x+1} value={x + 1}>
                                
                            </option>
                        )]}
                      </select>
                    </td>
                    <td className="p-3 text-right">{item.price}</td>
                    <td className="p-3 text-center">
                      <button onClick={() => handleRemoveItem(item)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 card h-32 mt-5">
            <ul>
              <li>
                <div className="pb-3 text-xl font-bold">
                  Subtotal(
                  {cartItems.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.quantity,
                    0
                  )}
                  ) : $
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
