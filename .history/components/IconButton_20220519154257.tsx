import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
interface IBtnProps {
  buttonText: string
  icon?: File
  route: string
}

const IconButton: React.FC<IBtnProps> = ({ buttonText, icon, route }) => {
  return (
    <Link href={`${route}`}>
      <div
        className="flex cursor-pointer rounded-3xl bg-gradient-to-br from-yellowCustom 
      to-pinkCustom py-2 px-4"
      >
        <h2 className="text-lg">{buttonText}</h2>
        <Image src={icon} />
      </div>
    </Link>
  )
}

export default IconButton
