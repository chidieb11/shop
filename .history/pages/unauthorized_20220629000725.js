import React from 'react'
import { useRouter } from 'next/router'

const Unauthorized = () => {
    const router = useRouter();
    const {message}=router
  return (
    <div>
       
    </div>
  )
}

export default Unauthorized