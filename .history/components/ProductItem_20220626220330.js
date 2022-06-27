/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className=""
            rounded
            shadow
          />
        </a>
      </Link>
      <div className="">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="">{product.name}</h2>
          </a>
        </Link>
        <p>{product.brand}</p>
        <p>{</p>
      </div>
    </div>
  );
};

export default ProductItem;
