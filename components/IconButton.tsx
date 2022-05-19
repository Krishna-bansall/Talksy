import React from 'react'

interface IBtnProps {
  buttonText: string
  Icon: SVGElement
}

const IconButton: React.FC<IBtnProps> = ({ buttonText, Icon }) => {
  return <button className="flex rounded-2xl">{buttonText}</button>
}

export default IconButton
