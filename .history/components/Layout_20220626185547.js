import React from 'react'

 const Layout = ({children}) => {
  return (
    <div>
        <header>header</header>
        <main>{children}</main>
    </div>
  )
}

export default Layout