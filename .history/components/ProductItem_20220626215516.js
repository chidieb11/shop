import Link from 'next/link'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='card'>
        <Link href={`/product/${product.}`}
    </div>
  )
}

export default ProductItem