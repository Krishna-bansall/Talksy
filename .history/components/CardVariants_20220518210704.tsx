import React from 'react'
import Image from 'next/image'

interface IProps {
  heading: string
  emoji: any
  middleElement?: JSX.Element
  buttonText?: string
}

export const Card: React.FC<IProps> = ({
  heading,
  emoji,
  middleElement,
  buttonText,
}) => {
  return (
    <div className="flex w-2/4 flex-col justify-between">
      <h1>{heading}</h1>
      {emoji}
      <Image src={emoji}></Image>
    </div>
  )
}
