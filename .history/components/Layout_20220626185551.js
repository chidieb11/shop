import React from 'react'

export const Layout = ({children}) => {
  return (
    <div>
        <header>header</header>
        <main>{children}</main>
    </div>
  )
}

export default Layout