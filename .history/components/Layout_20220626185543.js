import React from 'react'

const Layout = ({child}) => {
  return (
    <div>
        <header>header</header>
        <main>{children}</main>
    </div>
  )
}

export default Layout