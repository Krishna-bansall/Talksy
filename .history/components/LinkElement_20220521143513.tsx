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
    <a href={link} onClick={handleClick}>
      {text}
    </a>
  )
}

export default LinkElement
