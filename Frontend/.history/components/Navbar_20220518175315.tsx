import React from 'react'
import Image from 'next/image'
import logo from '../public/images/logo.png'

export const Navbar = () => {
  return (
    <div>
      <Image src={logo}></Image>
    </div>
  )
}
