import Link from 'next/link'
import React from 'react'
interface ILink {
  link: string
  onClick?: () => string
  text?: string
}

const LinkElement: React.FC<ILink> = ({ link, onClick, text }) => {
  const handleClick = () => {
    onClick ? onClick() : null
    console.log('Clicked')
  }

  return (
    <Link href={link}>
      <p className="cursor-pointer text-blueCustom" onClick={handleClick}>
        {text}
      </p>
    </Link>
  )
}

export default LinkElement
