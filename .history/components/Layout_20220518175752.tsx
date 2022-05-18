import React, { FC, ReactNode } from 'react'
import { Navbar } from './Navbar'

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between p-4">
      <Navbar />
      <div className="overflow-hidden">
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </div>
  )
}

export default Layout
