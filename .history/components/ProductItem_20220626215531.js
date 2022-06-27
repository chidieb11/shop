import Link from 'next/link'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='card'>
        <Link href={`/product/${product.slug}`}>
            a
        </Link>
    </div>
  )
}

export default ProductItem