import React, { FC, ReactNode } from 'react'
import { Navbar } from './Navbar'

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-bgPrimary text-txtPrimary">
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default Layout
