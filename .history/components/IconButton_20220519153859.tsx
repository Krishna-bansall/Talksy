import React from 'react'
import Link from 'next/link'
interface IBtnProps {
  buttonText: string
  icon: SVGElement
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
      </div>
    </Link>
  )
}

export default IconButton
