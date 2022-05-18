import React, { FC } from 'react'
import { Navbar } from '../.history/components/Navbar_20220518170126'

interface ICHildren {}

const Layout: FC<ICHildren> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
    </div>
  )
}

export default Layout
