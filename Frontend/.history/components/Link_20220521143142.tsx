import React from 'react'

interface ILink {
  link: string
  onClick?: () => string
}

const Link: React.FC<ILink> = ({ link, onClick }) => {
  const handleClick = () => {
    onClick ? onClick() : null
  }

  return <a>Link</a>
}

export default Link
