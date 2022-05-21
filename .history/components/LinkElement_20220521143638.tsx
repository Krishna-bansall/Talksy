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
  }

  return (
    <Link href={link} onClick={handleClick}>
      {text}
    </Link>
  )
}

export default LinkElement
