import Link from 'next/link'
import React from 'react'

const DropdownLink = (props) => {
    let {href, children, ...rest}=props
  return (
    <Link href={href}>
       <a {...r}></a>
    </Link>
  )
}

export default DropdownLink