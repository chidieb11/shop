import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { XCircleIcon } from "@heroicons/react/outline";

const CartScreen = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout title="Shopping Cart">
      <h1 className="capitalize">shopping cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div>
            <table>
              <thead>
                <tr>
                  <th className="capitalize p-0">item</th>
                  <th className="capitalize p-5">quantity</th>
                  <th className="capitalize p-5">price</th>
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
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
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

          <div></div>
        </div>
      )}
    </Layout>
  );
};

export default CartScreen;
