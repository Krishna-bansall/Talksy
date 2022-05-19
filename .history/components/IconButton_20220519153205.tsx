import React from 'react'

interface IBtnProps {
  buttonText: string
  Icon: SVGElement
}

const IconButton: React.FC<IBtnProps> = ({ buttonText, Icon }) => {
  return (
    <button className="flex rounded-2xl bg-gradient-to-br from-yellowCustom to-pinkCustom p-4">
      <h2 className=" text-xl">{buttonText}</h2>
    </button>
  )
}

export default IconButton
