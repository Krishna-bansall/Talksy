import React from 'react'

interface ILink {
  link: string
  onClick?: () => string
  text?: string
}

const Link: React.FC<ILink> = ({ link, onClick, text }) => {
  const handleClick = () => {
    onClick ? onClick() : null
  }

  return <a onClick={handleClick}>{text}</a>
}

export default Link
