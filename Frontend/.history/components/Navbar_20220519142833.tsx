import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/Images/logo.png'

export const Navbar = () => {
  return (
    <div className="bg-blueCustom px-16 py-8">
      <Link href="/">
        <Image className="cursor-pointer" src={logo} />
      </Link>
    </div>
  )
}
