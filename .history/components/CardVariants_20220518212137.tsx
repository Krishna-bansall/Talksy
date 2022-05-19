import React from 'react'
import Image from 'next/image'

interface IProps {
  heading: string
  emoji: HTMLImageElement
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
    <div className=" flex w-2/4 flex-col justify-between rounded-2xl bg-inputBackground py-10">
      <div className="my-4 flex justify-center bg-bgSecondary">
        <h1 className="font-bold">{heading}</h1>
        <Image src={emoji}></Image>
      </div>

      <div className="my-4 flex justify-center bg-bgSecondary">
        <h1 className="font-bold">{heading}</h1>
        <Image src={emoji}></Image>
      </div>
    </div>
  )
}