import React, { FC, ReactNode } from 'react'
import { Navbar } from '../.history/components/Navbar_20220518170126'

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <div className="overflow-hidden">
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </div>
  )
}

export default Layout