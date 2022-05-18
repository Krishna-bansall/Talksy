import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/Images/logo.png'

export const Navbar = () => {
  return (
    <div>
      <Link className="cursor-pointer" href="/">
        <Image src={logo} />
      </Link>
    </div>
  )
}
