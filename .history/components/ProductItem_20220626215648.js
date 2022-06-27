/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='card'>
        <Link href={`/product/${product.slug}`}>
            <a>
                <img src={product.image} alt="" />
            </a>
        </Link>
    </div>
  )
}

export default ProductItem