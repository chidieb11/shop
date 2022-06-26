import React, { Children } from 'react'

const Layout = () => {
  return (
    <div>
        <header>header</header>
        <main>{Children}</main>
    </div>
  )
}

export default Layout