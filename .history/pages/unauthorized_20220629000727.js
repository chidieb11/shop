import React from 'react'
import { useRouter } from 'next/router'

const Unauthorized = () => {
    const router = useRouter();
    const {message}=router.query;
  return (
    <div>
       
    </div>
  )
}

export default Unauthorized