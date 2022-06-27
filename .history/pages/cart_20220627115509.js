import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

const CartScreen = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout title="Shopping Cart">
      <h1>shopping cart</h1>
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
                  <th className="capitalize">item</th>
                  <th className="capitalize">quantity</th>
                  <th className="capitalize">item</th>
                  <th className="capitalize">item</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CartScreen;
