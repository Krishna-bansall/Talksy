import React from 'react'
import Link from 'next/link'
interface IBtnProps {
  buttonText: string
  Icon: SVGElement
}

const IconButton: React.FC<IBtnProps> = ({ buttonText, Icon }) => {
  return (
    <Link className="flex rounded-2xl bg-gradient-to-br from-yellowCustom to-pinkCustom py-2 px-4">
      <h2 className="text-lg">{buttonText}</h2>
    </Link>
  )
}

export default IconButton
